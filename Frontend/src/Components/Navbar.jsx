import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Noteshub
      </Link>
      <div className="space-x-6">
        <Link to="/notes" className="hover:text-gray-400">
          Notes
        </Link>
        <Link to="/upload" className="hover:text-gray-400">
          Upload
        </Link>
        <Link to="/dashboard" className="hover:text-gray-400">
          Dashboard
        </Link>
        <Link to="/contact" className="hover:text-gray-400">
          Contact
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
