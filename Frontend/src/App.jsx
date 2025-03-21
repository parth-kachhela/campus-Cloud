import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Footer from "./components/Footer";
import Home from "./Pages/home";
// import Notes from "./pages/Notes";
// import Upload from "./pages/Upload";
// import Dashboard from "./pages/Dashboard";
// import Contact from "./pages/Contact";
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/notes" element={<Notes />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
