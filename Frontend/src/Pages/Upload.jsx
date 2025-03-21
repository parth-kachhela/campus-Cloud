import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState("");
  const [topicName, setTopicName] = useState("");
  const [description, setDescription] = useState("");
  const [noteType, setNoteType] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file || !user || !topicName || !description || !noteType) {
      alert("Please fill all fields and select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user", user);
    formData.append("topicName", topicName);
    formData.append("description", description);
    formData.append("noteType", noteType);

    fetch("http://localhost:8080/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => alert("File uploaded successfully!"))
      .catch((error) => alert("Error uploading file"));
  };

  return (
    <div className="form-container">
      <h1 className="form-h1">Upload Notes</h1>
      <input
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="inp-box"
      />
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
      <input type="file" onChange={handleFileChange} className="inp-file" />
      <button onClick={handleUpload} className="btn">
        Upload
      </button>
    </div>
  );
};

export default Upload;
