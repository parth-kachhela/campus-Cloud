import React, { useState } from "react";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    email: "user@example.com",
    university: "XYZ University",
    program: "Computer Science",
    subjects: "Math, Physics, Chemistry",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div className="mt-6 space-y-4">
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          className="p-2 border rounded w-1/2"
          disabled
        />
        <input
          type="text"
          name="university"
          value={userDetails.university}
          onChange={handleChange}
          className="p-2 border rounded w-1/2"
        />
        <input
          type="text"
          name="program"
          value={userDetails.program}
          onChange={handleChange}
          className="p-2 border rounded w-1/2"
        />
        <input
          type="text"
          name="subjects"
          value={userDetails.subjects}
          onChange={handleChange}
          className="p-2 border rounded w-1/2"
        />
      </div>
      <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
