import React from "react";
import "./footer.css"; 

export default function Footer() {
    return (
        <footer className="flex">
            <p className="copyright">© 2024 Mohamed Abdelrahim. All rights reserved.</p> 
            <ul className="social-links">
                <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <span className="icon-linkedin"></span> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Rahim413?" target="_blank" rel="noopener noreferrer">
                        <span className="icon-github"></span> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <span className="icon-youtube"></span> YouTube
                    </a>
                </li>
            </ul>
        </footer>
    );
}
