import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>ShopZone</span></h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to="/shop" className="cta-button">
            Start Shopping
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎁</div>
            <h3>Premium Products</h3>
            <p>Curated selection of high-quality items from top brands</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Free shipping on orders over $50 with express delivery</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>100% safe and secure checkout with encryption</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>24/7 Support</h3>
            <p>Dedicated customer support team always ready to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;