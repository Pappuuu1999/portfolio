import React from 'react'
import './About.css'
import img from "../../assets/theme_pattern.svg"
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={img} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Web Developer and have experience in multiples tools like wordpress and react and done most of the project are listed below</p>
                        <p>My passion for web development is</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Wordpress</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Digital Marketing</p>
                            <hr style={{ width: "90%" }} />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                        
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>PROJECTS COMPLETED</p>
                        
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>Happy CLIENTS</p>
                        
                    </div>
                    <hr />
                </div>
        </div>
    )
}

export default About
