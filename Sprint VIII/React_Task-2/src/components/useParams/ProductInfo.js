import React from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
  const { category, itemId } = useParams();

  return (
    <div className="task-container">
      <h2>Task 2: Show Product Info from URL</h2>
      <div className="task-content">
        <h3>Product Information</h3>
        <div className="product-info">
          <p>Category: <strong>{category}</strong></p>
          <p>Item ID: <strong>{itemId}</strong></p>
        </div>
        <div className="product-card">
          <h4>{category.charAt(0).toUpperCase() + category.slice(1)} Product</h4>
          <p>Product ID: {itemId}</p>
          <p>Both category and itemId were extracted from the URL using useParams()</p>
          <p>URL Pattern: /product/:category/:itemId</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;