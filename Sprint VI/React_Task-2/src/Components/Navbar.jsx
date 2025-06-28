import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling
import { Link, useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav1">
      <h1>My App Sanjai N</h1>
      <ul>
        <Link to="/">Home </Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact-us</Link>
        <Link to="/Users/101">Users</Link>
        {/* <Link to="/login">Login</Link> */}
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/Protected">Login</Link>

        {/* <li onClick={() => navigate("/login")}>Login</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
