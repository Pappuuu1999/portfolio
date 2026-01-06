import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import MyWork from '../../Components/MyWork/MyWork';

const HomePage = ({ projects, services }) => {
  return (
    <>
      <Hero />
      <About />
      <Services services={services} />
      <MyWork works={projects} />
    </>
  );
};

export default HomePage;
