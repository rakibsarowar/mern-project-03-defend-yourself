import React from 'react';

const Instructor = ({instructor}) => {
    const {name, email, image, classesTaken, classes} = instructor;

    return (
        <>
            <div className="max-w-lg mx-auto my-10 bg-white rounded-lg hover:shadow-xl p-5">
                <img className="w-32 h-32 rounded-full mx-auto" src={image} alt="Profile picture"></img>
                <h2 className="text-center text-2xl font-semibold mt-3">{name}</h2>
                <p className="text-center text-gray-600 mt-1">{classes} Instructor</p>
                <p className="text-center text-gray-600 mt-1">Email: {email}</p>
                <p className="text-center text-gray-600 mt-1">Classes Taken: {classesTaken}</p>
            </div>
        </>
    );
};

export default Instructor;