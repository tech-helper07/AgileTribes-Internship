import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartDisplay = () => {
  const { items, getTotalItems, getTotalPrice, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>🛒 Shopping Cart ({getTotalItems()} items)</h3>
      
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '10px',
              borderBottom: '1px solid #eee'
            }}>
              <div>
                <strong>{item.name}</strong> - ${item.price.toFixed(2)}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={{ padding: '2px 8px' }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={{ padding: '2px 8px' }}
                >
                  +
                </button>
                <button 
                  onClick={() => removeItem(item.id)}
                  style={{ padding: '2px 8px', backgroundColor: '#dc3545', color: 'white' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
            Total: ${getTotalPrice().toFixed(2)}
          </div>
          
          <button 
            onClick={clearCart}
            style={{ 
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartDisplay;