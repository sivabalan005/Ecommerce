import React, { useState, useEffect } from "react";
import { useCart } from '../Provoiders/AppProviders';  
import Airbuds1 from '../data/AirButs.json';
import './Style.css';
import BuyNowModal from "./BuynovModal";

function Airbuds() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart, removeFromCart, cartItems } = useCart(); // Get the addToCart and removeFromCart functions from context

  // Fetch products data
  useEffect(() => {
    setProducts(Airbuds1);
  }, []);

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCartClick = (product) => {
    removeFromCart(product.id);  // Remove product from cart by its ID
  };

  // Check if the product is in the cart
  const isProductInCart = (product) => {
    return cartItems.some(item => item.id === product.id);
  };

  return (
    <div className="App">
      <h1>Product Listings</h1>
      <div className="product-container">
        {products.map((product, index) => (
          <div key={`${product.id}-${index}`} className="product-card">
            <div className="product-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-title">
              <h3>{product.title}</h3>
              <h3>Price: Rs. $ {product.price}</h3>
            </div>
            <div className="product-btns">
              {!isProductInCart(product) ? (
                <button className="button button-3" onClick={() => handleAddToCartClick(product)}>
                  Add to Cart
                </button>
              ) : (
                <button className="button button-3" onClick={() => handleRemoveFromCartClick(product)}>
                  Remove from Cart
                </button>
              )}
              <button className="button button-4" onClick={() => handleBuyNowClick(product)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show Buy Now Modal if isModalOpen is true */}
      {isModalOpen && selectedProduct && (
        <BuyNowModal 
          product={selectedProduct} 
          closeModal={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default Airbuds;
