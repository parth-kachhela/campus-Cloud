import React from "react";
import "./Notes.css";

// Sample notes data
const sampleNotes = [
  { subject: "Mathematics", topic: "Algebra", file: "algebra.pdf" },
  { subject: "Mathematics", topic: "Calculus", file: "calculus.pdf" },
  { subject: "Physics", topic: "Quantum Mechanics", file: "quantum.pdf" },
  { subject: "Physics", topic: "Thermodynamics", file: "thermo.pdf" },
  { subject: "Computer Science", topic: "Data Structures", file: "ds.pdf" },
  { subject: "Computer Science", topic: "Algorithms", file: "algo.pdf" },
  { subject: "Chemistry", topic: "Organic Chemistry", file: "organic.pdf" },
  { subject: "Chemistry", topic: "Inorganic Chemistry", file: "inorganic.pdf" },
  { subject: "Biology", topic: "Genetics", file: "genetics.pdf" },
  { subject: "Biology", topic: "Cell Biology", file: "cell-bio.pdf" },
  { subject: "History", topic: "World War II", file: "ww2.pdf" },
  { subject: "History", topic: "Ancient Civilizations", file: "ancient.pdf" },
  { subject: "Literature", topic: "Shakespeare", file: "shakespeare.pdf" },
  { subject: "Literature", topic: "Modern Poetry", file: "poetry.pdf" },
  { subject: "Economics", topic: "Microeconomics", file: "micro.pdf" },
  { subject: "Economics", topic: "Macroeconomics", file: "macro.pdf" },
];

// NoteCard component to display individual notes
const NoteCard = ({ subject, topic, file }) => {
  return (
    <div className="note-card">
      <h2>{subject}</h2>
      <p>{topic}</p>
      <div className="note-card-btns">
        <a href={file} download>
          Download
        </a>
        <a href={file} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </div>
    </div>
  );
};

// Main Notes component
const Notes = () => {
  return (
    <div className="note-container">
      <h1 className="note-head">Notes</h1>
      <p className="note-desc">
        Browse and download study materials shared by others.
      </p>
      <div className="notes">
        {sampleNotes.map((note, index) => (
          <NoteCard
            key={index}
            subject={note.subject}
            topic={note.topic}
            file={note.file}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
