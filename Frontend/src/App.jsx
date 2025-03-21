import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/home";
import Notes from "./Pages/Notes.jsx";
// import Upload from "./pages/Upload";
// import Dashboard from "./pages/Dashboard";
// import Contact from "./pages/Contact";
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          {/* <Route path="/upload" element={<Upload />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
