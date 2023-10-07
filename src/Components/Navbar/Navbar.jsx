import React, { useState } from "react";
import "./Navbar.css";
import placeholder from "../../assets/placeholderSmall.svg";

function CustomNavbar({ scrollPage, toggleOverlay }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleNavLinkClick = (pageNumber) => {
    scrollPage(pageNumber);
    toggleOverlay();
  };

  const handleOverlayClick = () => {
    toggleOverlay();
    setIsOverlayOpen(false);
  };

  const toggleOverlayMenu = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={placeholder} className="icon" alt="Logo" />
      </div>
      <button className="toggle-button" onClick={toggleOverlayMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <ul
        className={`nav-list ${isOverlayOpen ? "overlay-open" : ""}`}
        onClick={handleOverlayClick}
      >
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleNavLinkClick(1)}>
            About Us
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleNavLinkClick(2)}>
            Working
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleNavLinkClick(3)}>
            FAQ
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleNavLinkClick(4)}>
            Contact
          </button>
        </li>
        <li className="nav-item">
          <button className="get-app-btn">Get App</button>
        </li>
      </ul>
    </nav>
  );
}

export default CustomNavbar;
