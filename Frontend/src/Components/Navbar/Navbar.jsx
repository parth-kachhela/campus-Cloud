import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../AuthContext"; // Update the import path

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CampusCloud
      </Link>
      <div className="nav-links">
        <Link to="/notes" className="links">
          Notes
        </Link>
        {isLoggedIn && ( // Conditionally render the Upload link
          <Link to="/upload" className="links">
            Upload
          </Link>
        )}
        <Link to="/contact" className="links">
          Contact
        </Link>
        <Link to="/about" className="links">
          About-Us
        </Link>
        <Link to="/profile" className="links">
          Profile
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="links logout-button">
            Logout <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        ) : (
          <>
            <Link to="/login" className="links login-button">
              Login <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/signup" className="links signup-button">
              Signup <FontAwesomeIcon icon={faUserPlus} />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
