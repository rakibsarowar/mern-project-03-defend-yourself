import React from 'react';

const ClassCard = ({ classData, isLoggedIn, isAdmin }) => {
    const { image, name, instructor, availableSeats, price } = classData;

    const handleSelect = () => {
        if (!isLoggedIn) {
            alert('Please log in before selecting the course.');
            return;
        }

        if (availableSeats === 0) {
            return;
        }
    };

    const cardStyle = {
        backgroundColor: availableSeats === 0 ? 'red' : 'white',
    };

    const selectButtonDisabled = availableSeats === 0 || isAdmin;

    return (
        <div className="class-card" style={cardStyle}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Instructor: {instructor}</p>
            <p>Available Seats: {availableSeats}</p>
            <p>Price: {price}</p>
            <button disabled={selectButtonDisabled} onClick={handleSelect}>
                Select
            </button>
        </div>
    );
};

export default ClassCard;
