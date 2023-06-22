import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const signUp = () => {
  const { createUser, updateUserProfile, getUserProfile } = useContext(authContext);
  const { signInWithGoogle } = useContext(authContext);
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // sign by google ------------------------------------------------------------
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from, { replace: true });

      })
      .catch(error => {
        console.log(error)
        setError()
      })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const password = watch('password');

  const onSubmit = (data) => {

    createUser(data.email, data.password)
      .then(result => {

        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, photoUrl:data.photoURL }

            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  getUserProfile();
                  navigate(from, { replace: true });
                  reset();
                }
              })



          })
          .catch(error => setError(error.message)
          )
          
      })

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center">
      <p className='text-center font-bold'>{error}</p>
      <form className='border rounded-lg shadow-md px-20 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
        <h2 className=" text-2xl font-bold mb-4">Registration</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>

          <div>
            <input
              type="text"
              {...register('name', { required: true })}
              className="border p-2"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>

        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="border p-2"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
              pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
            })}
            className="border p-2"
          />

          {errors.password && errors.password.type === 'required' && (
            <span className="text-red-500">Password is required</span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span className="text-red-500">Password must be at least 6 characters long</span>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <span className="text-red-500">
              Password must contain at least one uppercase letter, one lowercase letter, one
              numeric digit, and one special character
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Confirm Password</label>

          <input
            type="password"
            {...register('confirmPassword', {
              required: true,
              validate: (value) => value === password || 'Passwords do not match',
            })}
            className="border p-2"
          />

          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          )}

        </div>
        <div className="mb-4">
          <label className="block mb-2">Photo URL</label>
          <input type="text" {...register('photoUrl')} className="border p-2" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account? <a className="text-blue-500" href="/login">Login up now</a>
      </p>
      <p> Or, </p>
      <div className='text-center mt-4'>
        <button onClick={handleGoogleSignIn} className="btn btn-active btn-neutral mb-4">Google Login</button>
      </div>
    </div>

  );
};

export default signUp;
