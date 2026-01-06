import React from "react";
import { projects as projectsData } from "../../data/content";
import "./MyWork.css";

const MyWork = ({ works = projectsData }) => {

  return (
    <div className="mywork">
      <h1>My Latest Work</h1>
      <div className="mywork-container">
        {works.map((work) => (
          <div key={work.id}>
            <img src={work.w_img} alt={work.name} />
            <p>{work.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
