import React, { useState } from 'react';
import './Signup.css'
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
//   const history = useHistory();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setError('');
    alert('Login successful!');
  };

  return (
    <div className="form-container">
    <center>
      <FaRegUserCircle className='circle-user' />
    </center>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="input-container">
          <label>Username</label>
          <FaUserAlt className='user' />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <FaLock className='user'/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className='submit'>Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
