import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './WorkDetail.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import theme_Pattern from '../../assets/theme_pattern.svg'

const WorkDetail = () => {
  const { category } = useParams()
  
  // Find the work data based on category
  const workData = mywork_data.find(work => work.category === category)
  
  if (!workData) {
    return (
      <div className='work-detail'>
        <div className="work-detail-header">
          <h1>Service Not Found</h1>
          <Link to="/" className="back-link">
            <img src={arrow_icon} alt="Back" style={{transform: 'rotate(180deg)'}} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='work-detail'>
      <div className="work-detail-header">
        <div className="work-detail-title">
          <h1>{workData.w_name}</h1>
          <img src={theme_Pattern} alt="" />
        </div>
        <Link to="/" className="back-link">
          <img src={arrow_icon} alt="Back" style={{transform: 'rotate(180deg)'}} />
          Back to Home
        </Link>
      </div>

      <div className="work-detail-content">
        <div className="work-detail-hero">
          <div className="work-detail-image">
            <img src={workData.w_img} alt={workData.w_name} />
          </div>
          <div className="work-detail-info">
            <h2>About This Service</h2>
            <p>{workData.description}</p>
            <div className="work-detail-number">
              <span>{workData.w_no.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="work-detail-features">
          <h3>Key Features</h3>
          <div className="features-grid">
            {workData.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">✓</div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="work-detail-technologies">
          <h3>Technologies & Tools</h3>
          <div className="technologies-list">
            {workData.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="work-detail-projects">
          <h3>Featured Projects</h3>
          <div className="projects-grid">
            {workData.projects.map((project, index) => (
              <div key={index} className="project-item">
                <img src={project.img} alt={project.name} />
                <h4>{project.name}</h4>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project <img src={arrow_icon} alt="Arrow" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="work-detail-cta">
          <h3>Ready to Get Started?</h3>
          <p>Let's discuss how I can help bring your vision to life with {workData.w_name.toLowerCase()}.</p>
          <Link to="/#contact" className="cta-button">
            Get In Touch
            <img src={arrow_icon} alt="Arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WorkDetail
