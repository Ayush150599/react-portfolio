import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut magnam quod, aperiam possimus culpa?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam neque, adipisci numquam expedita fuga consequuntur.</p>
          </div>
          <div className="about-skills">
            <div className="about_skill">
              <p>HTML & CSS</p> <hr style={{width:"80%"}}/>
            </div>
            <div className="about_skill">
              <p>React JS</p> <hr style={{width:"70%"}}/>
            </div>
            <div className="about_skill">
              <p>JavaScript</p> <hr style={{width:"60%"}}/>
            </div>
            <div className="about_skill">
              <p>Next JS</p> <hr style={{width:"74%"}}/>
            </div>
            <div className="about_skill">
              <p>HTML & CSS</p> <hr style={{width:"50%"}}/>
            </div>
          </div>
        </div>
      </div>
      <div className="about_achievements">
        <div className="about_achievement">
          <h1>100+</h1>
          <p>PROBLEM SOLVED ON GFG</p>
        </div>
        <hr />
        <div className="about_achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about_achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>
    </div>
  )
}

export default About