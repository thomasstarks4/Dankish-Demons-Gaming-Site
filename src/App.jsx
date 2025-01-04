// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Main.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UnderConstruction from "./components/UnderConstruction";
import Progress from "./components/Progress";
// Basic components/views

function App() {
  return (
    <Router>
      <Navbar />
      <React.Fragment>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="*" element={<UnderConstruction />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
