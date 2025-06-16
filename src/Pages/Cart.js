// // Cart.js
import React,{useState} from 'react';
import { useCart } from '../Provoiders/AppProviders';  // Import the custom hook
import BuyNowModal from "../Products/BuynovModal";
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useCart(); // Get the cartItems and removeFromCart from context
    const [product] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <h1>Your Cart</h1>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <h4>Price: Rs. $ {item.price}</h4>
              <button className="button button-3" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              <button className="button button-4" onClick={() => handleBuyNowClick(product)}>Buy Now</button>
            </div>
          ))
        )}
      </div>
      {isModalOpen && selectedProduct && (
        <BuyNowModal 
          product={selectedProduct} 
          closeModal={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default Cart;