import React, { useEffect, useState } from "react";
import { fetchProjects } from "../../services/api"; // ✅ import API function
import "./MyWork.css";

const MyWork = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then((data) => setWorks(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

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
