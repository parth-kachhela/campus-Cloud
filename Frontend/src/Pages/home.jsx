import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for the styling

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNote, setSelectedNote] = useState(null); // Track the selected note for eBook display

  // Demo data for notes
  const [notes, setNotes] = useState([
    "Math Notes - Algebra",
    "Math Notes - Calculus",
    "Physics Notes - Quantum Mechanics",
    "Physics Notes - Thermodynamics",
    "Chemistry Notes - Organic Chemistry",
    "Chemistry Notes - Inorganic Chemistry",
    "Biology Notes - Genetics",
    "Biology Notes - Cell Biology",
    "Computer Science Notes - Data Structures",
    "Computer Science Notes - Algorithms",
    "History Notes - World War II",
    "History Notes - Ancient Civilizations",
    "Literature Notes - Shakespeare",
    "Literature Notes - Modern Poetry",
    "Economics Notes - Microeconomics",
    "Economics Notes - Macroeconomics",
  ]);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter notes based on search query
  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle note click to show eBook demo
  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  // Close the eBook demo
  const closeEbookDemo = () => {
    setSelectedNote(null);
  };

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
                <li
                  key={index}
                  className="note-item"
                  onClick={() => handleNoteClick(note)} // Handle note click
                >
                  {note}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-results">No matching notes found.</p>
          )}
        </div>

        {/* eBook Demo */}
        {selectedNote && (
          <div className="ebook-demo-overlay">
            <div className="ebook-demo">
              <h2>{selectedNote}</h2>
              <p>Here is a demo eBook for {selectedNote}.</p>
              <iframe
                src="https://drive.google.com/file/d/1eX7-ROW4U6684_wuUKvFZQdNl_q0np29/view?usp=sharing"
                width="100%"
                height="500px"
                title="eBook Demo"
              ></iframe>
              <button onClick={closeEbookDemo} className="close-btn">
                Close
              </button>
            </div>
          </div>
        )}

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
