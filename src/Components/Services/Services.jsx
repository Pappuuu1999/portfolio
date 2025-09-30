import React from 'react';
import './Services.css';
import theme_Pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const handleClick = (service) => {
    // Redirect to the workdetail page with the service ID
    window.location.href = `/workdetail?id=${service.s_no}`;
  };

  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_Pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className='services-format-link'
            onClick={() => handleClick(service)}
          >
            <div className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className='services-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
