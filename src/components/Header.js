//Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Provoiders/AppProviders';
import { useAuth } from '../Provoiders/AppProviders';  
import './Header.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { user, logout } = useAuth();  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };  

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className='headername'>SEVENISON</Link>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          {!user ? (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          ) : (
            <li>
              <span>{user.username}</span> 
              <button onClick={handleLogout} className='logout'>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;
