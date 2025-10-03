import React, { useEffect, useState } from 'react';
import './Services.css';
import theme_Pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import { fetchServices } from '../../services/api';
import ElectricBorder from '../Electric Border/ElectricBorder';

const Services = () => {
  const [services, setServices] = useState([]);



useEffect(() => {
  fetchServices()
    .then(data => setServices(data))
    .catch(err => console.error("Error fetching services:", err));
}, []);


  const handleClick = (service) => {
    // Redirect to the workdetail page with the service ID
    window.location.href = `/workdetail?id=${service.id}`;
  };

  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_Pattern} alt="pattern" />
      </div>

      <div className="services-container">
        {services.length > 0 ? (
          services.map((service) => (
            <ElectricBorder
              key={service.id}
              color="#B415FF"
              speed={1.2}
              chaos={0.8}
              thickness={2}
              className="service-card-border"
            >
              <div
                className='services-format-link'
                onClick={() => handleClick(service)}
              >
                <div className='services-format'>
                  <h3>{service.id}</h3>
                  <h2>{service.name || service.title}</h2>
                  <p>{service.tech || service.description}</p>
                  <div className='services-readmore'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt="arrow icon" />
                  </div>
                </div>
              </div>
            </ElectricBorder>
          ))
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </div>
  );
};

export default Services;
