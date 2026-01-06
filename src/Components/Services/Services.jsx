import React from 'react';
import './Services.css';
import theme_Pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import { services as servicesData } from '../../data/content';
import ElectricBorder from '../Electric Border/ElectricBorder';

const Services = ({ services = servicesData }) => {

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
          <p>No services available right now.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
