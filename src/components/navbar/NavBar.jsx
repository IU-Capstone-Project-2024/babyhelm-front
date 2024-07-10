import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import unlock from '../../assets/unlock 1.svg';
import { useAuth } from '../../context/AuthContext';

// Mock project data
const mockProjects = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
  { id: 3, name: 'Project C' }
];

const NavBar = ({ toggleAuthModal }) => {
  const { isLoggedIn, logout } = useAuth();
  const [showProjects, setShowProjects] = useState(false);

  const handleMouseEnter = () => {
    setShowProjects(true);
  };

  const handleMouseLeave = () => {
    setShowProjects(false);
  };

  return (
    <div className="babyhelm__navbar">
      <div className='babyhelm__navbar_logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='babyhelm__navbar_title'>
        <a href="/">Babyhelm</a>
      </div>
      <div className='babyhelm__navbar-button'>
        {isLoggedIn ? (
          <div className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <button type="button">
              My Projects
            </button>
            {showProjects && (
              <div className="dropdown-content">
                {mockProjects.map(project => (
                  <a key={project.id} href={`/project/${project.id}`}>
                    {project.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <button type="button" onClick={toggleAuthModal}>
            <img src={unlock} alt='unlock' />
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
