import React from 'react';
import './Services.css';
import theme_Pattern from '../../assets/theme_pattern.svg';
import servicesData from '../../assets/workData';   // ✅ renamed to match your file
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const handleClick = (service) => {
    // Redirect to the workdetail page with the service ID
    window.location.href = `/workdetail?id=${service.id}`;
  };

  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_Pattern} alt="" />
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className='services-format-link'
            onClick={() => handleClick(service)}
          >
            <div className='services-format'>
              <h3>{service.id}</h3> {/* ✅ was s_no */}
              <h2>{service.title}</h2> {/* ✅ was s_name */}
              <p>{service.description}</p> {/* ✅ was s_desc */}
              <div className='services-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
