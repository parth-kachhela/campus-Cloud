import React, { useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="signup-container text-center p-10">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-4 p-2 border rounded w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-4 p-2 border rounded w-full"
      />
      <button
        onClick={handleSignup}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
