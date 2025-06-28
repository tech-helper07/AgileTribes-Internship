import React from 'react'
// import { Navbar } from '../Components/Navbar.jsx';

export const Home = () => {
  return (
    <div className="page">
    <h1>Welcome to the Home Page</h1>
    <p>This is the main landing page of React Task 2 Routers.</p>
    <div className="card">
      <h3>Features</h3>
      <ul>
        <li>Basic Navigation</li>
        <li>Dynamic User Profiles</li>
        <li>Protected Dashboard</li>
        <li>Nested Routing</li>
      </ul>
    </div>
  </div>
  )
}

export default Home;
