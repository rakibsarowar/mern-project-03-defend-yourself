import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Login Successful !');

const LoginForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, signInWithGoogle } = useContext(authContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {

        const email = data.email;
        const fieldPassword = data.password

        signIn(email, fieldPassword)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                reset();
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error)
            })

        console.log(data);
    };

    // sign out ---------------------------------------
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

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

            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <form className="border rounded-lg shadow-md px-20 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl text-center font-semibold mb-8 text-white">Login</h2>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: true })}
                        />
                        <span
                            className="absolute top-0 right-0 px-3 py-2 cursor-pointer text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </span>
                    </div>
                    {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
                <div className='text-center'>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" onClick={notify}
                    >
                        Login
                    </button>
                </div>

                <p className="text-center text-white mt-4">
                    Don't have an account? <a className="text-blue-500" href="/signUp">Sign up now</a>
                </p>

                <Toaster />
            </form>
            <p className='text-white'> Or, </p>
            <div className='text-center mt-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-active btn-neutral mb-4">Google Login</button>
            </div>
        </div>
    );
};

export default LoginForm;
