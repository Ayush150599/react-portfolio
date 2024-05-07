import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1> <span>I' am Ayush Srivastava,</span> Mern Stack developer based in India</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, voluptate commodi non beatae sequi tenetur cum laudantium ipsa velit inventore sunt asperiores. Deleniti quibusdam voluptatum laborum a dolores! Doloribus, quas!</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero