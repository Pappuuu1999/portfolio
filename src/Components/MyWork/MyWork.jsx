// frontend/src/components/MyWork/MyWork.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyWork.css";
import theme_Pattern from "../../assets/theme_pattern.svg"; // decorative pattern
import arrow_icon from "../../assets/arrow_icon.svg"; // show more arrow
import Loader from "../Loader/Loader"; // ✅ import your loader component

const MyWork = () => {
  const [myWork, setMyWork] = useState([]);
  const [loading, setLoading] = useState(true);   // ✅ state for loader
  const [error, setError] = useState(null);       // ✅ state for error
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/projects`)
      .then((res) => {
        setMyWork(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;   // ✅ show spinner
  if (error) return <p>{error}</p>;

  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_Pattern} alt="decorative pattern" />
      </div>

      <div className="mywork-container">
        {myWork.map((work) => (
          <a
            key={work.id}
            href={work.link}   // ✅ use backend-provided link
            target="_blank"
            rel="noopener noreferrer"
            className="mywork-item"
          >
            <img src={`${API_BASE_URL}${work.w_img}`} alt={work.name} />
          </a>
        ))}
      </div>

      <div className="mywork-showmore">
        <span>Show More</span>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
