import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { authContext } from '../../Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Your Class Added for Approval!');

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(authContext);

  const onSubmit = async (data) => {
    const newClass = {
      className: data.className,
      classImage: data.classImage,
      instructorName: user.displayName,
      instructorEmail: user.email,
      availableSeats: data.availableSeats,
      price: data.price,
      status: 'pending',
    };

    try {
      const response = await axios.post('http://localhost:5000/classes', newClass);
      console.log('New class:', response.data);
      reset();
    } catch (error) {
      console.error('Error creating class:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto p-4 mt-10 bg-white rounded shadow"
    >
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Class Name:</label>
        <input {...register('className')} className="w-full border border-gray-300 rounded p-2" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Class Image:</label>
        <input {...register('classImage')} className="w-full border border-gray-300 rounded p-2" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Instructor Name:</label>
        <input
          value={user.displayName}
          readOnly
          className="w-full border border-gray-300 rounded p-2 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Instructor Email:</label>
        <input
          value={user.email}
          readOnly
          className="w-full border border-gray-300 rounded p-2 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Available Seats:</label>
        <input
          type="number"
          {...register('availableSeats')}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Price:</label>
        <input
          type="number"
          {...register('price')}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          onClick={notify}
          className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add Class
        </button>
      </div>
      <Toaster />
    </form>
  );
};

export default AddClass;
