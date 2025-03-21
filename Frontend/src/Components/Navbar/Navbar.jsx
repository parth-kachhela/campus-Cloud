import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Noteshub
      </Link>
      <div className="nav-links">
        <Link to="/notes" className="links">
          Notes
        </Link>
        <Link to="/upload" className="links">
          Upload
        </Link>
        <Link to="/dashboard" className="links">
          Dashboard
        </Link>
        <Link to="/contact" className="links">
          Contact
        </Link>
        <Link to="/about" className="links">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
