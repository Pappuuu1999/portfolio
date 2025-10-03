import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/Home/HomePage';
import WorkDetail from './Components/WorkDetail/WorkDetail';
import ContactPage from './Pages/ContactUs/ContactPage';
import { fetchProjects } from './services/api'; // ✅ import API function

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);      // ✅ NEW
  const [error, setError] = useState(null);          // ✅ NEW

  // ✅ Fetch API data once when App loads
  useEffect(() => {
    fetchProjects()
      .then(data => {
        setProjects(data);
        setLoading(false);  // ✅ NEW
      })
      .catch(err => {
        console.error("API Error:", err);
        setError("Failed to load projects"); // ✅ NEW
        setLoading(false);
      });
  }, []);

  // ✅ NEW: show loading or error while waiting for API
  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Loading projects...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>{error}</h2>;
  }

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <Layout>
              <HomePage projects={projects} />  {/* ✅ pass projects as props */}
            </Layout>
          } 
        />

        {/* Work Detail Page */}
        <Route 
          path="/work/:category" 
          element={
            <Layout>
              <WorkDetail projects={projects} /> {/* ✅ pass projects as props */}
            </Layout>
          } 
        />

        {/* Single Work Detail Page */}
        <Route 
          path="/workdetail" 
          element={
            <Layout>
              <WorkDetail projects={projects} /> {/* ✅ pass projects as props */}
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
