import React, { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import logo from '../../assets/logo.svg';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ new state
  const menuRef = useRef();
  const location = useLocation();

  // Check if current path is WorkDetail page
  const isWorkDetailPage = location.pathname.startsWith("/workdetail") || location.pathname.startsWith("/work/");
  
  // Check if current path is Contact page
  const isContactPage = location.pathname.startsWith("/contact");

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true); // ✅ menu is now open
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false); // ✅ menu is now closed
  };

  const handleLinkClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu(); // close menu after clicking
  };

  return (
    <div className="navbar">
      {/* ✅ Logo always shows */}
      <Link to="/">
        <img src={logo} alt="Logo" className="nav-logo" />
      </Link>

      {/* ✅ Show open icon if menu closed, close icon if menu open */}
      {!isMenuOpen && (
        <img src={menu_open} onClick={openMenu} alt="open menu" className="nav-mob-open" />
      )}
      {isMenuOpen && (
        <img src={menu_close} onClick={closeMenu} alt="close menu" className="nav-mob-open" />
      )}

      {/* ✅ Hide menu on WorkDetail OR ContactPage */}
      {!(isWorkDetailPage || isContactPage) && (
        <ul ref={menuRef} className="nav-menu">
          <li>
            <a href="#home" onClick={() => handleLinkClick("home")}>
              Home
            </a>
            {menu === "home" && <img src={underline} alt="" />}
          </li>
          <li>
            <a href="#about" onClick={() => handleLinkClick("about")}>
              About Me
            </a>
            {menu === "about" && <img src={underline} alt="" />}
          </li>
          <li>
            <a href="#services" onClick={() => handleLinkClick("services")}>
              Services
            </a>
            {menu === "services" && <img src={underline} alt="" />}
          </li>
          <li>
            <a href="#portfolio" onClick={() => handleLinkClick("portfolio")}>
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
