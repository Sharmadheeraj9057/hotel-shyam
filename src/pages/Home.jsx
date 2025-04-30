import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Hotel Shyam</h1>
          <div className="hero-buttons">
            <Link to="/menu" className="cta-button">View Menu</Link>
            <Link to="/book-table" className="secondary-button">Book a Table</Link> {/* ✅ Updated Path */}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers">
        <h2>Today's Specials</h2>
        <div className="offer-cards">
          <div className="offer-card">
            <h3>Weekend Buffet</h3>
            <p>₹499 per person</p>
            <span>Sat-Sun, 12PM-3PM</span>
          </div>
          <div className="offer-card highlight">
            <h3>Family Combo</h3>
            <p>₹999 for 4 people</p>
            <span>All day, every day</span>
          </div>
          <div className="offer-card">
            <h3>Lunch Special</h3>
            <p>₹299 per thali</p>
            <span>Mon-Fri, 11AM-3PM</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The best butter chicken I've ever had! Authentic flavors just like my grandmother used to make."</p>
            <div className="customer">- Rahul Sharma</div>
          </div>
          <div className="testimonial-card">
            <p>"Excellent service and the biryani is to die for. We come here every weekend!"</p>
            <div className="customer">- Priya Patel</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
