import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import theme_Pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  // Create category mapping for navigation
  const categoryMap = {
    "Web design": "web-design",
    "Graphics design": "graphics-design", 
    "Social media": "social-media",
    "App design": "app-design",
    "Digital marketing": "digital-marketing",
    "Content writing": "content-writing"
  }

  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_Pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>
            {
                const category = categoryMap[service.s_name] || service.s_name.toLowerCase().replace(' ', '-')
                return (
                  <Link key={index} to={`/work/${category}`} className='services-format-link'>
                    <div className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className='services-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                  </Link>
                )
            })}
      </div>
    </div>
  )
}

export default Services
