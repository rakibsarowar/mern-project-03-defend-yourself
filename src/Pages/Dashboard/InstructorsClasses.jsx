import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstructorsClasses = () => {
    const [instructorClasses, setInstructorClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstructorClasses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/classes');
                setInstructorClasses(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching instructor classes:', error);
            }
        };

        fetchInstructorClasses();
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-4">My Classes</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="space-y-4">
                    {instructorClasses.length === 0 ? (
                        <p>No classes found.</p>
                    ) : (
                        instructorClasses.map((cls) => (
                            <div className='px-20'>
                                <li key={cls?._id} className="card border border-gray-300 p-6 rounded">
                                    <h3 className="text-xl font-semibold text-center mb-2">{cls?.name}</h3>
                                    <img src={cls.image} alt={cls?.name} className="mb-2 rounded" />
                                    <p className="mb-2">Status: {cls?.status}</p>
                                    <p className="mb-2">Total Enrolled Students: {cls?.enrolledStudents?.length}</p>
                                    {cls.status === 'denied' && <p className="mb-2">Feedback: {cls?.feedback}</p>}
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                        Update
                                    </button>
                                </li>
                            </div>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
};

export default InstructorsClasses;
