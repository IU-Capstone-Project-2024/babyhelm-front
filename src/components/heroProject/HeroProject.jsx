import React from 'react'
import project_hero from '../../assets/project_hero.png'
import './heroProject.css'
const HeroProject = () => {
  return (
    <div className="project__hero-section">
      <div className="project__hero-content">
        <h1>Project Name</h1>
        <p>Project description</p>
        <a href='/create-app'><button className="project__hero-button">Add new app</button></a>
      </div>
      <div className="project__hero-image">
        <img src={project_hero} alt="Hero" />
      </div>
    </div>
  )
}

export default HeroProject