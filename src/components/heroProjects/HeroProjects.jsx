import React from 'react';
import './heroProjects.css';
import hero from '../../assets/hero.png'
const HeroProjects = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Babyhelm!</h1>
        <p>Tools for simplifying Kubernetes setup, enhancing monitoring, and streamlining deployments.</p>
        <a href='/create-project'><button className="hero-button">Create Project</button></a>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
}

export default HeroProjects;
