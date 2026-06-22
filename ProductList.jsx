import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './store/CartSlice'; // Đường dẫn tới file CartSlice của bạn
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const plantsArray = [
    { category: "Indoor", name: "Snake Plant", price: 20, image: "link_anh_1" },
    { category: "Indoor", name: "Spider Plant", price: 15, image: "link_anh_2" },
    { category: "Outdoor", name: "Rose", price: 30, image: "link_anh_3" },
    { category: "Outdoor", name: "Sunflower", price: 25, image: "link_anh_4" },
    { category: "Succulents", name: "Aloe Vera", price: 10, image: "link_anh_5" },
    { category: "Succulents", name: "Jade Plant", price: 12, image: "link_anh_6" }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/plants">Plants</a>
        <a href="/cart">Cart ({cartItems.length})</a>
      </nav>

      {["Indoor", "Outdoor", "Succulents"].map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {plantsArray.filter(p => p.category === category).map(plant => (
              <div key={plant.name} className="product-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button 
                  disabled={cartItems.find(item => item.name === plant.name)}
                  onClick={() => handleAddToCart(plant)}
                >
                  {cartItems.find(item => item.name === plant.name) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
