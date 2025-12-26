import React, { createContext, useState, useContext, useEffect } from 'react';

// --- AuthContext ---
const AuthContext = createContext();

// Custom hook to use the Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider to wrap the App and provide authentication data
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if there's a user in localStorage on initial load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));  // Persist user data in localStorage
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');  // Clear user data from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// --- CartContext ---
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

// CartProvider to wrap the App and provide cart data
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};



// --- Combined Context Provider ---
export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
          {children}
      </CartProvider>
    </AuthProvider>
  );
};
