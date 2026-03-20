import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) navigate('/login');
  }, [navigate]);
  
  useEffect(() => {
    if (items.length === 0 && !orderPlaced) navigate('/cart');
  }, [items, navigate, orderPlaced]);
  
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    setOrderPlaced(true);
    setTimeout(() => navigate('/'), 3000);
  };
  
  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-icon">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for shopping with ShopZone</p>
        <button onClick={() => navigate('/')} className="continue-shopping">
          Continue Shopping
        </button>
      </div>
    );
  }
  
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-layout">
        <form onSubmit={handlePlaceOrder} className="checkout-form">
          <div className="form-section">
            <h3>Shipping Information</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" required placeholder="123 Main St" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" required placeholder="New York" />
              </div>
              <div className="form-group">
                <label>ZIP Code</label>
                <input type="text" required placeholder="10001" />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Payment Information</h3>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="**** **** **** ****" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="***" required />
              </div>
            </div>
          </div>
          
          <button type="submit" className="place-order-btn">
            Place Order (${totalAmount.toFixed(2)})
          </button>
        </form>
        
        <div className="order-summary">
          <h3>Order Summary</h3>
          {items.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.title} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-total">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;