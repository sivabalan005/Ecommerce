// Airbuds.js
import React, {  useState,useEffect } from "react";
import { useCart } from '../Provoiders/AppProviders';  // Import the custom hook
import Smarttv1 from '../data/Smarttv.json'
import './Style.css';
import BuyNowModal from "./BuynovModal";

function Smarttv() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const { addToCart } = useCart(); // Get the addToCart function from context

  // Fetch products data
  useEffect(() => {
    const fetchProducts = () => {
      setProducts(Smarttv1);
    };
    fetchProducts();
  }, []);

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <h1>Product Listings</h1>
      <div className="product-container">
        {products.map((product, index) => (
          <div key={`${product.id}-${index}`} className="product-card">
            <div className="product-img">
              <img src={product.image} alt={product.image} />
            </div>
            <div className="product-title">
              <h3>{product.title}</h3>
              <h3>Price: Rs. $ {product.price}</h3>
            </div>
            <div className="product-btns">
              <button className="button button-3" onClick={() => addToCart(product)}>Add to cart</button>
              <button   className="button button-4"onClick={() => handleBuyNowClick(product)}>Buy Now</button>
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

export default Smarttv;