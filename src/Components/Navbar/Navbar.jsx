import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div>
      <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
          <li>
            <a href="#home" onClick={() => setMenu("home")}>
              Home
            </a>
            {menu === "home" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <a href="#about" onClick={() => setMenu("about")}>
              About Me
            </a>
            {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <a href="#services" onClick={() => setMenu("services")}>
              Services
            </a>
            {menu === "services" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenu("portfolio")}>
              Portfolio
            </a>
            {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <a href="#contact" onClick={() => setMenu("contact")}>
              Contact
            </a>
            {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </li>
        </ul>
        <div className="nav-connect">
          Connect With Me
        </div>
      </div>
    </div>
  )
}

export default Navbar
