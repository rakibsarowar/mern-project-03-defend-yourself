import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';


const Class = ({ singleClass}) => {
    const { axiosSecure } = useAxiosSecure();
  const { image, name, instructor, availableSeats, price } = singleClass;
  const { user} = useContext(authContext)
  const isLoggedIn = user; 
  
  const handleSelect = () => {
    if (!isLoggedIn) {
      alert('Please log in before selecting the course.');
      return;
    }

    if (availableSeats === 0) {
      return;
    }


    const bookingData = {
      classId: singleClass._id, 
      userId: isLoggedIn._id, 
    };

    axiosSecure.post('/bookings', bookingData)
      .then(response => {

        console.log(response.data); 
      })
      .catch(error => {

        console.error(error);
      });
  };

  const cardStyle = {
    backgroundColor: availableSeats === 0 ? 'red' : 'white',
  };

  const selectButtonDisabled = availableSeats === 0;

  return (
    <>
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" style={cardStyle}>
        <div className="relative">
          <img className="w-full rounded-xl" src={image} alt="Colors" />
        </div>
        <h1 className="mt-4 text-gray-800 text-center text-2xl font-bold cursor-pointer">{name}</h1>
        <h1 className="mt-4 text-gray-800 text-center cursor-pointer">Instructor: {instructor}</h1>
        <h1 className="mt-4 text-gray-800 text-center cursor-pointer">Course Fee: {price}</h1>
        <h1 className="mt-4 text-gray-800 text-center cursor-pointer">Available Seats: {availableSeats}</h1>
        <div className="my-4">
          <button disabled={selectButtonDisabled} onClick={handleSelect} className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"> Booking Now</button>
        </div>
      </div>
    </>
  );
};

export default Class;
