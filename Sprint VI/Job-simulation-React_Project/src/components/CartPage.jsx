import React, { useState, useEffect } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // Fetch cart items when component loads
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://localhost:3001/cart');
      const data = await response.json();
      setCartItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setLoading(false);
    }
  };

  const deleteFromCart = async (itemId) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      try {
        await fetch(`http://localhost:3001/cart/${itemId}`, {
          method: 'DELETE',
        });
        // Remove item from local state
        setCartItems(cartItems.filter(item => item.id !== itemId));
        alert('Item removed from cart!');
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to remove item');
      }
    }
  };

  const startEditing = (item) => {
    setEditingItem(item.id);
    setEditFormData({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    });
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setEditFormData({});
  };

  const saveEdit = async (itemId) => {
    try {
      const updatedItem = {
        ...cartItems.find(item => item.id === itemId),
        ...editFormData
      };

      await fetch(`http://localhost:3001/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      // Update local state
      setCartItems(cartItems.map(item => 
        item.id === itemId ? updatedItem : item
      ));
      
      setEditingItem(null);
      setEditFormData({});
      alert('Item updated successfully!');
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update item');
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    try {
      const item = cartItems.find(item => item.id === itemId);
      const updatedItem = { ...item, quantity: newQuantity };

      await fetch(`http://localhost:3001/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      setCartItems(cartItems.map(item => 
        item.id === itemId ? updatedItem : item
      ));
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  if (loading) {
    return <div className="loading">Loading cart...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <a href="/" className="continue-shopping">Continue Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart ({cartItems.length} items)</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            
            <div className="cart-item-details">
              {editingItem === item.id ? (
                // Edit Mode
                <div className="edit-form">
                  <input
                    type="text"
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
                    className="edit-input"
                  />
                  <input
                    type="number"
                    value={editFormData.price}
                    onChange={(e) => setEditFormData({...editFormData, price: Number(e.target.value)})}
                    className="edit-input"
                  />
                  <input
                    type="number"
                    value={editFormData.quantity}
                    onChange={(e) => setEditFormData({...editFormData, quantity: Number(e.target.value)})}
                    className="edit-input"
                    min="1"
                  />
                  <div className="edit-buttons">
                    <button onClick={() => saveEdit(item.id)} className="save-btn">Save</button>
                    <button onClick={cancelEditing} className="cancel-btn">Cancel</button>
                  </div>
                </div>
              ) : (
                // View Mode
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price}</p>
                  
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">Qty: {item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  
                  <div className="item-actions">
                    <button 
                      onClick={() => startEditing(item)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteFromCart(item.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Total: ${calculateTotal()}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
        <a href="/" className="continue-shopping">Continue Shopping</a>
      </div>
    </div>
  );
}

export default CartPage;