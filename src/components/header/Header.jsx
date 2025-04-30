import { useState, useEffect } from 'react';
import { FaHamburger, FaTimes } from 'react-icons/fa'; // Removed unused FaShoppingCart
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'hidden' : ''}`}>
      <div className="header-container">
      <Link to="/" className="logo">
  <span>Hotel Shyam</span>
</Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
        </nav>

        <div className="cart-icon">
          <Link to="/cart">
            {/* Shopping cart icon removed since it wasn't being used */}
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaHamburger />}
        </button>
      </div>
    </header>
  );
};

export default Header;