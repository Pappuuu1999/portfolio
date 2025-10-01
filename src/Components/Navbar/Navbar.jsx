import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import logo from '../../assets/logo.svg';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();

  // Check if current path is WorkDetail page
  const isWorkDetailPage = location.pathname.startsWith("/workdetail") || location.pathname.startsWith("/work/");
  
  // Check if current path is Contact page
  const isContactPage = location.pathname.startsWith("/contact");

  return (
    <div className="navbar">
      {/* ✅ Logo always shows */}
      <Link to="/">
        <img src={logo} alt="Logo" className="nav-logo" />
      </Link>

      {/* ✅ Hide menu on WorkDetail OR ContactPage */}
{!(isWorkDetailPage || isContactPage) && (
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
  </ul>
)}

      {/* ✅ Always show button */}
      <Link to="/contact" className="nav-connect">
        Connect With Me
      </Link>
    </div>
  );
};

export default Navbar;
