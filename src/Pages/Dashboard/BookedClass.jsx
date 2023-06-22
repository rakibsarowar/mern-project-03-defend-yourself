import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

const BookedClasses = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/bookings');
      const data = await response.json();

      const bookingsWithDetails = await Promise.all(
        data.map(async (booking) => {
          const classResponse = await fetch(`http://localhost:5000/classes/${booking.classId}`);
          const classData = await classResponse.json();
          return {
            ...booking,
            classData,
          };
        })
      );

      setBookings(bookingsWithDetails);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };
  const { refetch } = useQuery('bookings', fetchBookings); 

  const handleDelete = async (bookingId) => {
    try {
      await fetch(`http://localhost:5000/bookings/${bookingId}`, {
        method: 'DELETE',
      });
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== bookingId)
      );
      refetch();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handlePay = (bookingId) => {
    // TODO
  };

  return (
    <div>
      <h1 className="text-2xl font-bold my-8 text-center">Booked Classes</h1>
      <table className="min-w-full text-center bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-4 font-bold uppercase">#</th>
            <th className="py-3 px-4 font-bold uppercase">Class</th>
            <th className="py-3 px-4 font-bold uppercase">Instructor</th>
            <th className="py-3 px-4 font-bold uppercase">Price</th>
            <th className="py-3 px-4 font-bold uppercase">Delete</th>
            <th className="py-3 px-4 font-bold uppercase">Enroll</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="border-b border-gray-300">
              <th>{index + 1}</th>
              <td className="py-2 px-4">{booking.classData.name}</td>
              <td className="py-2 px-4">{booking.classData.instructor}</td>
              <td className="py-2 px-4">{booking.classData.price}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-red-700 hover:bg-red-900 text-white font-semibold px-2 py-1 rounded mr-2"
                  onClick={() => handleDelete(booking._id)}
                >
                  Delete
                </button>
              </td>
              <td className="py-2 px-4">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-2 py-1 rounded"
                  onClick={() => handlePay(booking.id)}
                >
                  Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedClasses;
