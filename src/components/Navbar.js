import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { darkMode } = useSelector((state) => state.theme);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Shop<span>Zone</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/shop" className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`}>
            Shop
          </Link>
          <Link to="/cart" className="cart-icon">
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
          
          <button onClick={() => dispatch(toggleTheme())} className="theme-toggle">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;