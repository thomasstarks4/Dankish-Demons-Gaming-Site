import React from "react";
import logoSrc from "../images/sleeping-dankish-demon-no-bg.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dank px-2 mb-4">
      <a className="navbar-brand ddg-nav-link" href="/">
        <img
          style={{ height: "75px", width: "75px" }}
          src={logoSrc}
          alt="Logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link ddg-nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ddg-nav-link" href="/in-progress">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
