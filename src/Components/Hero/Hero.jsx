import React, { useEffect } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  useEffect(() => {
    // Call consoleText once after the component mounts
    consoleText(['Web Developer.', 'Wordpress Developer.', 'Graphic Designer.'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
  }, []); // Empty dependency array means it runs only once after initial render

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    let con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    const intervalId = setInterval(function () {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        setTimeout(function () {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    const underscoreIntervalId = setInterval(function () {
      if (visible) {
        con.className = 'console-underscore hidden';
        visible = false;
      } else {
        con.className = 'console-underscore';
        visible = true;
      }
    }, 400);

    // Cleanup the intervals when the component unmounts
    return () => {
      clearInterval(intervalId);
      clearInterval(underscoreIntervalId);
    };
  }
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Usama Ali Khan</span><br />        <div className='console-container'>
          <span id='text'></span>
          <div className='console-underscore' id='console'>&#95;</div>
        </div></h1>
      <p>I am a web developer from Islamabad, Pakistan wiht 2 years of experience</p>
      <fiv className="hero-action">
        <div className="hero-connect">
            Connect with me
        </div>
        <div className='hero-resume'>
            My resume
        </div>
      </fiv>
    </div>
  )
}

export default Hero
