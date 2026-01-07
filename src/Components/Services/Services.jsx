import React from 'react';
import './Services.css';
import theme_Pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import { services as servicesData } from '../../data/content';

const Services = ({ services = servicesData }) => {

  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_Pattern} alt="pattern" />
      </div>

      <div className="services-container">
        {services.length > 0 ? (
          services.map((service) => (
            <div
              key={service.id}
              className='services-format-link service-card-border'
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
          ))
        ) : (
          <p>No services available right now.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
