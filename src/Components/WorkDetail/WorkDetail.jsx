import React, { useEffect, useState } from "react";
import "./WorkDetail.css";
import arrow_icon from "../../assets/arrow_icon.svg";

const WorkDetail = () => {
  const [workItem, setWorkItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the id from query params
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchWorkItem = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
        const res = await fetch(`${API_BASE_URL}/api/work/${id}`);
        if (!res.ok) throw new Error("Failed to fetch work detail");

        const data = await res.json();
        setWorkItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchWorkItem();
  }, [id]);

  if (loading) {
    return (
      <section className="work-detail" id="work-detail">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (error || !workItem) {
    return (
      <section className="work-detail" id="work-detail">
        <h2>Work Not Found</h2>
        <p>{error || "The requested work item does not exist."}</p>
      </section>
    );
  }

  return (
    <section className="work-detail" id="work-detail">
      <div className="work-detail-header">
        <h1>{workItem.title}</h1>
        {workItem.projects?.[0]?.img && (
          <img
            src={workItem.projects[0].img}
            alt={workItem.title}
            className="work-detail-image"
          />
        )}
      </div>

      <div className="work-detail-content">
        <p className="work-description">{workItem.description}</p>

        {workItem.features && (
          <div className="work-features">
            <h3>Key Features</h3>
            <ul>
              {workItem.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {workItem.technologies && (
          <div className="work-technologies">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {workItem.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {workItem.projects && (
          <div className="work-projects">
            <h3>Related Projects</h3>
            <div className="projects-grid">
              {workItem.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <img src={project.img} alt={project.name} />
                  <h4>{project.name}</h4>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <img src={arrow_icon} alt="Arrow" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkDetail;
