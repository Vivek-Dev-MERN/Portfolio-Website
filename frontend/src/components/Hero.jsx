import React from 'react';
import './Hero.css';
import profileImage from '../images/budha.jpg'; // Ensure the correct path to your image

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Vivek Reddy Chennu</h1>
        <p>Full-Stack Web Developer | MERN Stack | Cloud Enthusiast</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Vivek Reddy Chennu" />
      </div>
    </div>
  </section>
);

export default Hero;
