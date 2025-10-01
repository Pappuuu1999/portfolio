import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/Home/HomePage';
import WorkDetail from './Components/WorkDetail/WorkDetail';
import ContactPage from './Pages/ContactUs/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <Layout>
              <HomePage />
            </Layout>
          } 
        />

        {/* Work Detail Page */}
        <Route 
          path="/work/:category" 
          element={
            <Layout>
              <WorkDetail />
            </Layout>
          } 
        />

        {/* Single Work Detail Page */}
        <Route 
          path="/workdetail" 
          element={
            <Layout>
              <WorkDetail />
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
