import React from 'react';
import '../styles/BookingPage.css';

function BookingPage() {
  return (
    <section className="booking-page">
      <h2>Reserve a Table</h2>
      <form className="booking-form">
        <label>Seating Option:</label>
        <div>
          <input type="radio" id="indoor" name="seating" value="indoor" />
          <label htmlFor="indoor">Indoor</label>
          <input type="radio" id="outdoor" name="seating" value="outdoor" />
          <label htmlFor="outdoor">Outdoor</label>
        </div>
        
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />
        
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" />
        
        <label htmlFor="guests">Guests:</label>
        <select id="guests" name="guests">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        
        <label htmlFor="requests">Additional Requests:</label>
        <textarea id="requests" name="requests" placeholder="Type your comments here..."></textarea>
        
        <button type="submit">Reserve the Table</button>
      </form>
    </section>
  );
};

export default BookingPage
