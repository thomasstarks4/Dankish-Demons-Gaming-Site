// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Main.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// Basic components/views

const About = () => <div>About View</div>;
const Contact = () => <div>Contact View</div>;

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="app-container ">
          <Navbar />
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
