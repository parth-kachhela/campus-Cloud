import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for the styling

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState([
    "Math Notes",
    "Physics Notes",
    "Chemistry Notes",
    "Biology Notes",
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1 className="title">Welcome to CampusCloud</h1>
        <p className="description">
          A platform to share and access study materials easily.
        </p>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Notes..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        {/* Search Results */}
        <div className="search-results">
          {filteredNotes.length > 0 ? (
            <ul>
              {filteredNotes.map((note, index) => (
                <li key={index} className="note-item">
                  {note}
                </li>
              ))}
            </ul>
          ) : (
            <p>No matching notes found.</p>
          )}
        </div>

        {/* Top Contributors */}
        <div className="contributors">
          <h2 className="sub-title">Top Contributors</h2>
          <div className="contributors-grid">
            <div className="contributor-card">parth</div>
            <div className="contributor-card">keval</div>
            <div className="contributor-card">raj</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons-container">
          <Link to="/notes" className="button explore-btn">
            Explore Notes
          </Link>
          <Link to="/upload" className="button upload-btn">
            Upload Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
