"use client"; 
import { useState, useEffect } from "react";
import Link from 'next/link'; 
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("dark"); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem("currentMode");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []); 

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]); 

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="flex">
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-menu3 flex"
        aria-label="Open Menu"
      >
      </button>

      <nav className={`nav ${showModal ? 'active' : ''}`}>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/cv">CV</Link>
          </li>
        </ul>
      </nav>

      <div className="theme-toggle">
        <button
          onClick={toggleTheme}
          className="mode flex"
          aria-label="Toggle Dark Mode"
        >
          {theme === "dark" ? (
            <span className="icon-moon-o"></span> 
          ) : (
            <span className="icon-sun"></span> 
          )}
        </button>
      </div>

      {showModal && (
        <div className="fixed modal">
          <button
            className="icon-close"
            onClick={() => setShowModal(false)}
            aria-label="Close Menu"
          >
            X
          </button>
          <ul className="modal-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/resources">Contact</Link>
            </li>
            <li>
              <Link href="/cv">CV</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
