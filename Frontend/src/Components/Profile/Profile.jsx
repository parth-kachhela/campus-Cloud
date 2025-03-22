import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    university: "atmiya university",
    program: "Bsc it",
    subjects: "sad , dbms",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [token]);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8080/api/user/details",
        {
          university: userDetails.university,
          program: userDetails.program,
          subjects: userDetails.subjects,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data.message);
      setIsEditing(false);
    } catch (error) {
      console.error("Update Error:", error);
      setMessage("Error updating details.");
    }
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Profile</h1>
      {message && <p className="text-green-500">{message}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-6 space-y-4">
          <div>
            <label>University: </label>
            <input
              type="text"
              name="university"
              value={"parth@gmail.com"}
              onChange={handleChange}
              className="p-2 border rounded w-1/2"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Program: </label>
            <input
              type="text"
              name="program"
              value={"Bsc it"}
              onChange={handleChange}
              className="p-2 border rounded w-1/2"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Subjects: </label>
            <input
              type="text"
              name="subjects"
              value={"sad , dbms"}
              onChange={handleChange}
              className="p-2 border rounded w-1/2"
              disabled={!isEditing}
            />
          </div>
        </div>
      )}

      <div className="mt-6">
        {isEditing ? (
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            onClick={handleSave}
          >
            Save Changes
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
