"use client";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <header className="flex">
      <button
        onClick={() => setshowModal(true)}
        className="menu icon-menu3 flex"
        aria-label="Open Menu"
      ></button>
      <nav className="nav">
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">CV</a>
          </li>
        </ul>
      </nav>

      <button
        className="mode flex icon-moon-o"
        aria-label="Toggle Dark Mode"
      ></button>

      {showModal && (
        <div className="fixed modal">
          <button
            className="icon-close"
            onClick={() => setshowModal(false)}
            aria-label="Close Menu"
          >
            X
          </button>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">CV</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
