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
// Basic components/views

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="app-container pt-5">
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<UnderConstruction />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
