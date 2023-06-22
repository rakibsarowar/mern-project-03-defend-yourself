import React, { useState, useEffect } from 'react';

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('http://localhost:5000/classes');
        const data = await response.json();
        const classesWithButtonDisabled = data.map((cls) => ({ ...cls, isButtonDisabled: false }));
        setClasses(classesWithButtonDisabled);
      } catch (error) {
        console.log('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleApprove = async (classId) => {
    try {
      const updatedClasses = classes.map((cls) =>
        cls._id === classId ? { ...cls, isButtonDisabled: true } : cls
      );

      setClasses(updatedClasses);

      const response = await fetch(`http://localhost:5000/classes/${classId}/approve`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const updatedClasses = classes.map((cls) =>
          cls._id === classId ? { ...cls, status: 'approved', isButtonDisabled: true } : cls
        );
        setClasses(updatedClasses);
      }
    } catch (error) {
      console.log('Error approving class:', error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      const updatedClasses = classes.map((cls) =>
        cls._id === classId ? { ...cls, isButtonDisabled: true } : cls
      );

      setClasses(updatedClasses);

      const response = await fetch(`http://localhost:5000/classes/${classId}/deny`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const updatedClasses = classes.map((cls) =>
          cls._id === classId ? { ...cls, status: 'denied', isButtonDisabled: true } : cls
        );
        setClasses(updatedClasses);
      }
    } catch (error) {
      console.log('Error denying class:', error);
    }
  };

  const handleSendFeedback = (classId) => {
    setFeedbackMessage('');
    setSelectedClassId(classId);
    window.my_modal_1.showModal();
  };

  const handleSend = async () => {
    try {
      const response = await fetch(`http://localhost:5000/classes/${selectedClassId}/feedback`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback: feedbackMessage }),
      });

      if (response.ok) {
        const updatedClasses = classes.map((cls) =>
          cls._id === selectedClassId ? { ...cls, feedback: feedbackMessage } : cls
        );
        setClasses(updatedClasses);
      }
    } catch (error) {
      console.log('Error sending feedback:', error);
    } finally {
      window.my_modal_1.close();
    }
  };

  return (
    <div>
      <table className="min-w-full text-center bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-4 font-bold uppercase">Photo</th>
            <th className="py-3 px-4 font-bold uppercase">Class Name</th>
            <th className="py-3 px-4 font-bold uppercase">Instructor</th>
            <th className="py-3 px-4 font-bold uppercase">Instructor Email</th>
            <th className="py-3 px-4 font-bold uppercase">Available Seats</th>
            <th className="py-3 px-4 font-bold uppercase">Price</th>
            <th className="py-3 px-4 font-bold uppercase">Status</th>
            <th className="py-3 px-4 font-bold uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls._id} className="border-b border-gray-300">
              <td className="py-3 px-4"><img className="w-full rounded-xl" src={cls.image}/></td>
              <td className="py-3 px-4">{cls.name}</td>
              <td className="py-3 px-4">{cls.instructor}</td>
              <td className="py-3 px-4">{cls.instructorEmail}</td>
              <td className="py-3 px-4">{cls.availableSeats}</td>
              <td className="py-3 px-4">{cls.price}</td>
              <td className="py-3 px-4">{cls.status}</td>
              <td className="py-3 px-4">
                <button
                  onClick={() => handleApprove(cls._id)}
                  disabled={cls.status !== 'pending' || cls.isButtonDisabled}
                  className={`${cls.status !== 'pending' || cls.isButtonDisabled
                    ? 'bg-violet-200 cursor-not-allowed'
                    : 'bg-violet-500 hover:bg-violet-600'
                  } text-white font-bold py-2 px-4 mt-2 rounded mr-2`}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDeny(cls._id)}
                  disabled={cls.status !== 'pending' || cls.isButtonDisabled}
                  className={`${cls.status !== 'pending' || cls.isButtonDisabled
                    ? 'bg-red-200 cursor-not-allowed'
                    : 'bg-red-700 hover:bg-red-900'
                  } text-white font-bold py-2 px-4 mt-2 rounded mr-2`}
                >
                  Deny
                </button>
                <button
                  onClick={() => handleSendFeedback(cls._id)}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 mt-2 rounded"
                >
                  Send Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <input
            type="text"
            value={feedbackMessage}
            onChange={(e) => setFeedbackMessage(e.target.value)}
            className="bg-gray-100 px-4 py-2 rounded-md mb-2"
            placeholder="Enter feedback message"
          />
          <div className="modal-action">
            <button className="btn" onClick={handleSend}>
              Send
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ClassesPage;
