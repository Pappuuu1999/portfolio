import React from "react";
import { projects as projectsData } from "../../data/content";
import "./MyWork.css";

const MyWork = ({ works = projectsData }) => {

  const handleClick = (work, index) => {
    // Only the first box (index 0) should be clickable
    if (index === 0) {
      // Redirect to the workdetail page with the work ID
      window.location.href = `/workdetail?id=${work.id}`;
    }
  };

  return (
    <div id="portfolio" className="mywork">
      <h1>My Latest Work</h1>
      <div className="mywork-container">
        {works.map((work, index) => (
          <div 
            key={work.id}
            onClick={() => handleClick(work, index)}
            style={{ cursor: index === 0 ? 'pointer' : 'default' }}
          >
            <img src={work.w_img} alt={work.name} />
            <p>{work.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
