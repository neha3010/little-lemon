import React from 'react';

function BookingSlot({ time }) {
    return (
        <div className='booking-slot'>
            <p>Available Slot: {time}</p>
        </div>
    );
}

export default BookingSlot;