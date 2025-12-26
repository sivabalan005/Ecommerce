import React, { useState, useEffect } from "react";
import { useCart } from '../Provoiders/AppProviders';  
import Airbuds1 from '../data/AirButs.json';
import BuyNowModal from "../Products/BuynovModal";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const { addToCart } = useCart(); // Get the addToCart function from context

  // Fetch products data
  useEffect(() => {
    const fetchProducts = () => {
      setProducts(Airbuds1);
      setFilteredProducts(Airbuds1); // Initially show all products
    };
    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    if (searchKeyword.trim()) {
      const filtered = products.filter(product => 
        (product.title && product.title.toLowerCase().includes(searchKeyword.toLowerCase())) || 
        (product.description && product.description.toLowerCase().includes(searchKeyword.toLowerCase()))
      );
      
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products if no keyword
    }
  };

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="App1">  
      {/* Search Section */}
      <div className="search-container1">
        <input 
          type="text" 
          value={searchKeyword} 
          onChange={handleSearchChange} 
          placeholder="Search for products..." 
        />
        <button onClick={handleSearchClick} className="inpicon"><FaSearch /></button>
        <button  className="sort" ><Link to="/home2">Sort Products</Link></button>
        
         {/* <button><Link to="/home2" className="sort">Sort Products</Link></button> */}
      </div>

      <div className="product-container1">
        {filteredProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="product-card1">
            <div className="product-img1">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-title1">
              <h3>{product.title}</h3>
              <h3>Price: Rs. $ {product.price}</h3>
            </div>
       <div class="container-eg-btn-3">
        <button class="button button-8"onClick={() => addToCart(product)}>Add To Cart</button>
        <button class="button button-7"onClick={() => handleBuyNowClick(product)} >Buy Now</button>
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

export default Home;