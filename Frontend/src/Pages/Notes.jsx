import React from "react";
import "./Notes.css";

const sampleNotes = [
  { subject: "Mathematics", topic: "Algebra", file: "example.pdf" },
  { subject: "Physics", topic: "Quantum Mechanics", file: "physics.pdf" },
  { subject: "Computer Science", topic: "Data Structures", file: "cs.pdf" },
];

const NoteCard = ({ subject, topic, file }) => {
  return (
    <div className="note-card">
      <h2>{subject}</h2>
      <p>{topic}</p>
      <div className="note-card-btns">
        <a href={file} download>
          Download
        </a>
        <a href={file} download>
          View
        </a>
      </div>
    </div>
  );
};

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
