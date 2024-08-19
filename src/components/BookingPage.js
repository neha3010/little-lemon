import React, { useState } from 'react';
import '../styles/BookingPage.css';

function BookingPage({ availableTimes, dispatch }) {
  // Defining the state variables for form fields
  const [seating, setSeating] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('None');
  const [requests, setRequests] = useState('');

  // Stateful array for available times
  // const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  // Handling the date change and dispatch state change
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);

    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  }

  // Handling the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
    seating,
    date,
    time,
    guests,
    occasion,
    requests,
  };

  if (!date || !time || !guests || guests < 1 || guests > 10) {
    alert("Please fill in all required fields and make sure guest count is between 1 and 10.");
    return;
  }

  console.log("Form submitted:", formData);

  dispatch({ type: 'BOOK_SLOT', date, time });

  // const updatedTimes = availableTimes.filter((t) => t !== time);
  // updateAvailableTimes(updatedTimes);

  setSeating('');
  setDate('');
  setTime('');
  setGuests(1);
  setOccasion('None');
  setRequests('');
    // console.log({ seating, date, time, guests, occasion, requests });
  };


  return (
    <section className="booking-page">
      <h2>Reserve a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Seating Option:</label>
        <div>
          <input type="radio" id="indoor" name="seating" value="indoor" checked={seating === 'indoor'} onChange={(e) => setSeating(e.target.value)}/>
          <label htmlFor="indoor">Indoor</label>
          <input type="radio" id="outdoor" name="seating" value="outdoor" checked={seating === 'outdoor'} onChange={(e) => setSeating(e.target.value)}/>
          <label htmlFor="outdoor">Outdoor</label>
        </div>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={handleDateChange}/>

        <label htmlFor="time">Time:</label>
        <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}> {timeOption}</option>
            ))}
          </select>

        <label htmlFor="guests">Guests:</label>
         <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
        <label for="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>None</option>
        </select>
        <label htmlFor="requests">Additional Requests:</label>
        <textarea id="requests" name="requests" placeholder="Type your comments here..." value={requests} onChange={(e) => setRequests(e.target.value)}></textarea>
        
        <button type="submit">Reserve the Table</button>
      </form>
    </section>
  );
};

export default BookingPage
