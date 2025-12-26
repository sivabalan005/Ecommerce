import React, { useState } from "react";
import axios from 'axios'; 
import './Buynov.css'; 


function BuyNowModal({ product, closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      productTitle: product.title,
      price: product.price,
    };

    // Send the data to the backend
    axios.post('https://fs-backend-e4b7.onrender.com/api/orders', orderData)
      .then((response) => {
        console.log(response.data);
        alert("Order placed successfully!");
        closeModal(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert("Error placing the order.");
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Complete Your Purchase</h2>
        <h3 >Product:<span className="product">{product.title}</span></h3>
        <h3>Price:<span className="product">Rs.$ {product.price}</span></h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
              className="modalinput"
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
              className="modalinput"

            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleInputChange} 
              required 
              className="modalinput"
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea 
              name="address" 
              value={formData.address} 
              onChange={handleInputChange} 
              required 
              className="modalinput"
            ></textarea>
          </div>
          <button className="btns" type="submit">Submit {product.price}</button>
          <button className="btns" type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default BuyNowModal;
