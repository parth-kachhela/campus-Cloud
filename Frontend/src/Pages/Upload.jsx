import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [topicName, setTopicName] = useState("");
  const [description, setDescription] = useState("");
  const [noteType, setNoteType] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    // Validate all fields
    if (!file || !topicName || !description || !noteType) {
      alert("Please fill all fields and select a file to upload");
      return;
    }

    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("file", file); // Append the file
      formData.append("topicName", topicName); // Append topic name
      formData.append("description", description); // Append description
      formData.append("noteType", noteType); // Append note type

      // Send the data to the backend
      const response = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the auth token
        },
        body: formData, // Send FormData directly
      });

      // Check if the request was successful
      if (!response.ok) {
        // Handle non-JSON responses
        const errorText = await response.text();
        throw new Error(errorText || "Failed to upload note and file");
      }

      const data = await response.json();
      console.log("Upload successful:", data);
      alert("Note and file uploaded successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Error uploading note and file");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-h1">Upload Notes</h1>
      <input
        type="text"
        placeholder="Topic Name"
        value={topicName}
        onChange={(e) => setTopicName(e.target.value)}
        className="inp-box"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="inp-box"
      />
      <select
        value={noteType}
        onChange={(e) => setNoteType(e.target.value)}
        className="inp-box"
      >
        <option value="">Select Type of Note</option>
        <option value="E-Book">E-Book</option>
        <option value="Assignment">Assignment</option>
        <option value="Notes">Notes</option>
        <option value="Question Paper">Question Paper</option>
      </select>
      <input
        type="file"
        onChange={handleFileChange}
        className="inp-file"
        name="file"
      />
      <button onClick={handleUpload} className="btn">
        Upload
      </button>
    </div>
  );
};

export default Upload;
