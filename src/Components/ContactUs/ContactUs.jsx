import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'; 
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current path is WorkDetail page
  const isWorkDetailPage = location.pathname.startsWith("/workdetail");

  // ✅ Scroll to contact (with routing support)
  const handleContactScroll = () => {
    if (location.pathname === "/") {
      // Already on homepage → just scroll
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setMenu("contact");
    } else {
      // Not on homepage → navigate first, then scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setMenu("contact");
      }, 300); // wait a bit for home to render
    }
  };

  return (
    <div className="navbar">
      {/* ✅ Logo now links to home */}
      <Link to="/">
        <img src={logo} alt="Logo" className="nav-logo" />
      </Link>

      {/* Hide menu if on WorkDetail page */}
      {!isWorkDetailPage && (
        <ul className="nav-menu">
          <li>
            <a href="#home" onClick={() => setMenu("home")}>
              Home
            </a>
            {menu === "home" && <img src={underline} alt="" />}
          </li>
          <li>
            <a href="#about" onClick={() => setMenu("about")}>
              About Me
            </a>
            {menu === "about" && <img src={underline} alt="" />}
          </li>
          <li>
            <a href="#services" onClick={() => setMenu("services")}>
              Services
            </a>
            {menu === "services" && <img src={underline} alt="" />}
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenu("portfolio")}>
              Portfolio
            </a>
            {menu === "portfolio" && <img src={underline} alt="" />}
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleContactScroll(); }}>
              Contact
            </a>
            {menu === "contact" && <img src={underline} alt="" />}
          </li>
        </ul>
      )}

      {/* ✅ Button hidden on WorkDetail page */}
      {!isWorkDetailPage && (
        <div className="nav-connect" onClick={handleContactScroll}>
          Connect With Me
        </div>
      )}
    </div>
  );
};

export default Navbar;
