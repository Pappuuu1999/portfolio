import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/Home/HomePage';
import WorkDetail from './Components/WorkDetail/WorkDetail';
import ContactPage from './Pages/ContactUs/ContactPage';
import { projects as projectsData, services as servicesData, workDetails as workDetailsData } from './data/content';

const App = () => {
  const projects = projectsData;
  const services = servicesData;
  const workDetails = workDetailsData;

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <Layout>
              <HomePage projects={projects} services={services} />
            </Layout>
          } 
        />

        {/* Work Detail Page */}
        <Route 
          path="/work/:category" 
          element={
            <Layout>
              <WorkDetail workDetails={workDetails} />
            </Layout>
          } 
        />

        {/* Single Work Detail Page */}
        <Route 
          path="/workdetail" 
          element={
            <Layout>
              <WorkDetail workDetails={workDetails} />
            </Layout>
          } 
        />

        {/* Contact Page */}
        <Route 
          path="/contact" 
          element={
            <Layout>
              <ContactPage />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
