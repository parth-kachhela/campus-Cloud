import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CampusCloud
      </Link>
      <div className="nav-links">
        <Link to="/notes" className="links">
          My Notes
        </Link>
        <Link to="/upload" className="links">
          Upload
        </Link>
        <Link to="/contact" className="links">
          Contact
        </Link>
        <Link to="/about" className="links">
          About-Us
        </Link>
        <Link to="/profile" className="links">
          Profile
        </Link>
        <Link to="/login" className="links login-button">
          Login <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/signup" className="links signup-button">
          Signup <FontAwesomeIcon icon={faUserPlus} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
