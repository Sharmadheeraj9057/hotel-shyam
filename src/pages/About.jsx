import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">About <span>Hotel Shyam</span></h1>
        
        <div className="about-content">
          <div className="left-image-section">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" 
              alt="Hotel Shyam" 
              className="hotel-image"
            />
          </div>
          
          <div className="right-text-section">
            <div className="about-text">
              <p className="description">
                Established in 1972, Hotel Shyam has been serving authentic Rajasthani, 
                Mughlai & Punjabi cuisine for over 50 years. Our traditional recipes 
                are preserved from generations.
              </p>
              
              <h3 className="sub-heading">Our Special Features:</h3>
              <ul className="features-list">
                <li>50+ years of culinary excellence</li>
                <li>Authentic generational recipes</li>
                <li>Hygienic kitchen environment</li>
                <li>Experienced master chefs</li>
              </ul>
              
              <div className="contact-box">
                <h3 className="sub-heading">Contact Details:</h3>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Spice Street, Jaipur</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+91 90575 36327</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>hotelshyam@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;