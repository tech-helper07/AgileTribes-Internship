import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// useRef Components
import FocusInput from './components/useRef/FocusInput';
import ButtonClickCounter from './components/useRef/ButtonClickCounter';
import Stopwatch from './components/useRef/Stopwatch';
import PreviousValue from './components/useRef/PreviousValue';
import ScrollToElement from './components/useRef/ScrollToElement';

// useParams Components
import UserProfile from './components/useParams/UserProfile';
import ProductInfo from './components/useParams/ProductInfo';
import UserDetails from './components/useParams/UserDetails';
import TabNavigation from './components/useParams/TabNavigation';
import CityPage from './components/useParams/CityPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-menu">
          <h2>React Learning Tasks</h2>
          
          <div className="nav-section">
            <h3>useRef Tasks</h3>
            <Link to="/focus-input">Focus Input</Link>
            <Link to="/click-counter">Click Counter</Link>
            <Link to="/stopwatch">Stopwatch</Link>
            <Link to="/previous-value">Previous Value</Link>
            <Link to="/scroll-demo">Scroll Demo</Link>
          </div>

          <div className="nav-section">
            <h3>useParams Tasks</h3>
            <Link to="/user/123">User Profile</Link>
            <Link to="/product/electronics/laptop-456">Product Info</Link>
            <Link to="/user-details/789">User Details</Link>
            <Link to="/tab/home">Tab Navigation</Link>
            <Link to="/city/paris">City Page</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            {/* useRef Routes */}
            <Route path="/focus-input" element={<FocusInput />} />
            <Route path="/click-counter" element={<ButtonClickCounter />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/previous-value" element={<PreviousValue />} />
            <Route path="/scroll-demo" element={<ScrollToElement />} />
            
            {/* useParams Routes */}
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/product/:category/:itemId" element={<ProductInfo />} />
            <Route path="/user-details/:userId" element={<UserDetails />} />
            <Route path="/tab/:tabName" element={<TabNavigation />} />
            <Route path="/city/:cityName" element={<CityPage />} />
            
            {/* Default Route */}
            <Route path="/" element={
              <div className="welcome">
                <h1>Welcome to React Learning Tasks</h1>
                <p>Choose a task from the navigation menu to get started!</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;