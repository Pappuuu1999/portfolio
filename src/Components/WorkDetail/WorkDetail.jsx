import React from "react";
import { useParams } from "react-router-dom";
import "./WorkDetail.css";
import arrow_icon from "../../assets/arrow_icon.svg";
import { workDetails as workDetailsData } from "../../data/content";

const WorkDetail = ({ workDetails = workDetailsData }) => {
  const { category } = useParams();

  const searchParams = new URLSearchParams(window.location.search);
  const queryId = searchParams.get("id");
  const lookupId = queryId || category;
  const workItem = workDetails.find((item) => item.id === lookupId);

  if (!lookupId || !workItem) {
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
        <h1>{workItem.name}</h1>
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
