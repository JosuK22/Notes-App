import React from "react";
import "./Sidebar.css";

function Sidebar() {
  
  const handleButtonClick = () => {
    window.open("https://josuk22.github.io/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="sidebar">
      
      <button class="animated-button" onClick={handleButtonClick}>
        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
        </svg>
        <span class="text">Visit My Website</span>
        <span class="circle"></span>
        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
        </svg>
      </button>
      <p id="footer-p">&copy; 2024 josuk22. All rights reserved.</p>
    </div>
  );
}

export default Sidebar;
