import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Shop.css'

const Shop = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the product details from the backend API
        axios.get('https://fs-backend-e4b7.onrender.com/api/orders') // Adjust the URL if necessary
            .then(response => {
                setOrders(response.data);  // Set the response data to the state
                setLoading(false);          // Set loading to false once data is fetched
            })
            .catch(err => {
                setError('Error fetching orders');
                setLoading(false);
            });
    }, []);

    // If still loading, show a loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    // If there was an error, display the error message
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Order List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.productTitle}</td>
                            <td>${order.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Shop;
