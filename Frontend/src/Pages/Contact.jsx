import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [problem, setProblem] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    alert(`Problem: ${problem}\nDescription: ${description}`);
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className="con-h1">Contact Us</h1>
        <p className="con-p">Feel free to reach out to us for any queries.</p>
        <p className="con-email">Email: support@noteshub.com</p>
        <p className="con-mo">Phone: +123 456 7890</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            className="inp"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="inp-area"
          />
          <button onClick={handleSubmit} className="btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
