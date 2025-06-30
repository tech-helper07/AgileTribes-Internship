import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Header */}
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              Septo Shopping Cart
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">Products Home</Link>
              <Link to="/cart" className="nav-link">Cart</Link>
            </div>
          </div>
        </nav>

        {/* Page Routes */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;