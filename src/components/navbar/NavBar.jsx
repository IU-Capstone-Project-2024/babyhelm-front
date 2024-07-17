import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './navbar.css';
import logo from '../../assets/logo.svg';
import unlock from '../../assets/unlock 1.svg';
import logoutIcon from '../../assets/logout.png'; // Assuming you have moved the image to the appropriate location in your project
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ toggleAuthModal }) => {
  const { isLoggedIn, logout } = useAuth(); // Assuming `logout` method is provided by AuthContext
  const [showProjects, setShowProjects] = useState(false);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const access_token = localStorage.getItem('access_token');
      const token_type = localStorage.getItem('token_type') || 'Bearer';

      if (!access_token) {
        console.error('No access token found');
        return;
      }

      try {
        const response = await axios.get('http://babyhelm-api-svc.taila53571.ts.net/cluster/projects', {
          headers: {
            'accept': 'application/json',
            'Authorization': `${token_type} ${access_token}`
          }
        });

        const projectsData = response.data.map((project) => ({
          name: project.name
        }));

        setProjects(projectsData);

        console.log('Projects data fetched');
        console.log(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    if (isLoggedIn) {
      fetchProjects();
    }
  }, [isLoggedIn]);

  const handleMouseEnter = () => {
    setShowProjects(true);
  };

  const handleMouseLeave = () => {
    setShowProjects(false);
  };

  const handleClick = () => {
    navigate('/projects');
  };

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home page after logout
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
          <>
            <div className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <button type="button" onClick={handleClick}>
                My Projects
              </button>
              {showProjects && (
                <div className="dropdown-content">
                  {projects.map(project => (
                    <a
                      key={project.name}
                      href={`/project/${encodeURIComponent(project.name)}`}>
                      {project.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <button type="button" className="logout-button" onClick={handleLogout}>
              <img src={logoutIcon} alt="Logout" />
            </button>
          </>
        ) : (
          <button type="button" className='login-button' onClick={toggleAuthModal}>
            <img src={unlock} alt='unlock' />
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
