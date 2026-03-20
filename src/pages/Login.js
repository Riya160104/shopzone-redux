import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const user = { id: 'guest_' + Date.now(), name: 'Guest User', email: email || 'guest@shopzone.com' };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/checkout');
      setLoading(false);
    }, 1000);
  };
  
  const handleGuestLogin = () => {
    const user = { id: 'guest_' + Date.now(), name: 'Guest User', email: 'guest@shopzone.com' };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/checkout');
  };
  
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Sign in to continue shopping</p>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          
          <button type="submit" disabled={loading} className="login-btn">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="guest-section">
          <p>or</p>
          <button onClick={handleGuestLogin} className="guest-btn">
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;