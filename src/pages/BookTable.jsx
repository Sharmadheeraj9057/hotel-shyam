import React from "react";
import "./BookTable.css";

const BookTable = () => {
  return (
    <div className="booking-container">
      <h2>Book a Table</h2>
      <form className="booking-form">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <label>Date</label>
        <input type="date" required />

        <label>Time</label>
        <input type="time" required />

        <label>Number of Guests</label>
        <select required>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3-4">3-4</option>
          <option value="5+">5+</option>
        </select>

        <button type="submit" className="btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookTable;
