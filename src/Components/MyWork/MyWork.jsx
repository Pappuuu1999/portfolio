import React from 'react'
import './MyWork.css'
import theme_Pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id="portfolio" className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_Pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index) => {
            if (work.link) {
              return (
                <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
                  <img src={work.w_img} />
                </a>
              )
            }
            return <img key={index} src={work.w_img}/>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
