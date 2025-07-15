import React from 'react';
import { useCart } from '../contexts/CartContext';

const AddToCart = () => {
  const { addItem } = useCart();

  const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Mouse', price: 29.99 },
    { id: 3, name: 'Keyboard', price: 79.99 },
    { id: 4, name: 'Monitor', price: 299.99 },
    { id: 5, name: 'Headphones', price: 199.99 }
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>🛍️ Products</h3>
      <div style={{ display: 'grid', gap: '10px' }}>
        {products.map(product => (
          <div key={product.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px'
          }}>
            <div>
              <strong>{product.name}</strong> - ${product.price.toFixed(2)}
            </div>
            <button 
              onClick={() => addItem(product)}
              style={{
                padding: '5px 15px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;