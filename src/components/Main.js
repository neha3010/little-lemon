import React, { useReducer } from "react";
import BookingPage from "./BookingPage";
import BookingSlot from "./BookingSlot";

function timesReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES': {
            const { date } = action;
            const bookedSlots = state.booked[date] || [];
            const allTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

            return {
                ...state,
                availableTimes: allTimes.filter((time) => !bookedSlots.includes(time)),
            };
        }
        case 'BOOK_SLOT': {
            const { date, time } = action;
            const bookedSlots = state.booked[date] || [];

            return {
                ...state, 
                booked: {
                    ...state.booked,
                    [date]: [...bookedSlots, time],
                },
            };
        }

        default:
            return state;
    }
}

// function updateTimes(state, action) {
//     return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
// }

function initializeTimes() {
    return {
        availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        booked: {},

    };
}

function Main() {
    const [state, dispatch] = useReducer(timesReducer, [], initializeTimes);

    // // Function to update available times
    // const updateAvailableTimes = (newTimes) => {
    //     setAvailableTimes(newTimes);
    // };

    return (
        <div>
            <BookingPage availableTimes={state.availableTimes} dispatch={dispatch}/>
            <div className="booking-slots">
                {state.availableTimes.map((time) => (
                    <BookingSlot key={time} time={time}/>
                ))}
            </div>
        </div>
    );
}

export default Main;