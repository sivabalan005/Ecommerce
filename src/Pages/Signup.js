import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { FaRegUserCircle, FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbLockCheck } from "react-icons/tb";
import { useAuth } from '../Provoiders/AppProviders';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth(); // Access the login function from AuthContext

  // Handle form submission for Sign Up
  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    
    // Sending POST request to Spring Boot backend to register user
    axios.post('https://fs-backend-e4b7.onrender.com/api/auth/signup', {
      username,
      email,
      password,
    })
    .then(response => {
      console.log('Signup success:', response.data);
      login({ username });  // Log the user in and store the username
      alert('Signup successful!');
      
      // Clear fields after successful signup
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    })
    .catch(error => {
      console.error('Signup failed:', error.response?.data);
      setError('Signup failed. Please try again.');
    });
  };

  // Handle form submission for Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setError('');
    
    // Sending POST request to Spring Boot backend to authenticate user
    axios.post('https://fs-backend-e4b7.onrender.com/api/auth/login', {
      username,
      password,
    })
    .then(response => {
      console.log('Login success:', response.data);
      login({ username });  // Log the user in
      alert('Login successful!');
    })
    .catch(error => {
      console.error('Login failed:', error.response?.data);
      setError('Invalid credentials');
    });
  };

  return (
    <div className="form-container">
      <center>
        <FaRegUserCircle className="circle-user" />
      </center>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      
      {/* Login Form */}
      {isLogin ? (
        <form onSubmit={handleLoginSubmit} className="auth-form">
          <div className="input-container">
            <label>Username</label>
            <FaUserAlt className="user" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <FaLock className="user" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="submit">Login</button>
        </form>
      ) : (
        // Sign Up Form
        <form onSubmit={handleSignUpSubmit} className="auth-form">
          <div className="input-container">
            <label>Username</label>
            <FaUserAlt className="user" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <MdEmail className="user" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <FaLock className="user" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Confirm Password</label>
            <TbLockCheck className="user" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="submit">Sign Up</button>
        </form>
      )}

      <div className="toggle-link">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <span className="toggle-link-btn" onClick={() => setIsLogin(false)}>
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span className="toggle-link-btn" onClick={() => setIsLogin(true)}>
              Log In
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
