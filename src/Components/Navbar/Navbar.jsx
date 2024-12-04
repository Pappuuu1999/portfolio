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
        <li><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline}/>:<></>}</li>
        <li><p  onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<img src={underline}/>:<></>}</li>
        <li><p  onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<img src={underline}/>:<></>}</li>
        <li><p  onClick={()=>setMenu("portfolio")}>Portfolio</p>{menu==="portfolio"?<img src={underline}/>:<></>}</li>
        <li><p  onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline}/>:<></>}</li>
      </ul>
      <div className="nav-connect">
        Connect With Me
      </div>
    </div>
    </div>
  )
}

export default Navbar
