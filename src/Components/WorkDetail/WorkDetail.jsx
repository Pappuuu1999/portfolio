import React from "react";
import "./WorkDetail.css";
import workData from "../../assets/workData";  // make sure path is correct
import arrow_icon from "../../assets/arrow_icon.svg";

const WorkDetail = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  const workItem = workData.find((item) => item.id === id);

  if (!workItem) {
    return (
      <section className="work-detail" id="work-detail">
        <h2>Work Not Found</h2>
        <p>The requested work item does not exist.</p>
      </section>
    );
  }

  return (
    <section className="work-detail" id="work-detail">
      <div className="work-detail-header">
        <h1>{workItem.title}</h1>
        {/* ✅ use first project image instead of missing 'image' field */}
        <img
          src={workItem.projects[0].img}
          alt={workItem.title}
          className="work-detail-image"
        />
      </div>
      <div className="work-detail-content">
        <p className="work-description">{workItem.description}</p>

        <div className="work-features">
          <h3>Key Features</h3>
          <ul>
            {workItem.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

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
      </div>
    </section>
  );
};

export default WorkDetail;
