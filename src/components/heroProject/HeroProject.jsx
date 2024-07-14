import React from 'react';
import PropTypes from 'prop-types';
import project_hero from '../../assets/project_hero.png';
import './heroProject.css';

const HeroProject = ({ projectName, projectDescription = '' }) => {
  const createAppUrl = `/project/${projectName}/create-app`;
  return (
    <div className="project__hero-section">
      <div className="project__hero-content">
        <h1>{projectName}</h1>
        <p>{projectDescription}</p>
        <a href={createAppUrl}>
          <button className="project__hero-button">Add new app</button>
        </a>
      </div>
      <div className="project__hero-image">
        <img src={project_hero} alt="Hero" />
      </div>
    </div>
  );
};

HeroProject.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string
};

export default HeroProject;
