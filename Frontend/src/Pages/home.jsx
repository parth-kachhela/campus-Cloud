import React from "react";
import "tailwindcss";

const Home = () => {
  return (
    <div className="home-container text-center p-10 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-blue-600">
        Welcome to Noteshub
      </h1>
      <p className="text-xl text-gray-700 mt-4 max-w-md">
        A platform to share and access study materials easily.
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          Explore Notes
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          Upload Notes
        </button>
      </div>
    </div>
  );
};

export default Home;
