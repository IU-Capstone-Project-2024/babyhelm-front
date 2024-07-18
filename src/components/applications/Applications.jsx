import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './applications.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Applications = ({ applications }) => {
  const [selectedApp, setSelectedApp] = useState(applications.length > 0 ? applications[0].name : '');
  const [appData, setAppData] = useState(null);
  const { projectName } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedApp(event.target.value);
  };

  const selectedApplication = applications.find(app => app.name === selectedApp);

  const handleOpenApp = () => {
    navigate(`/project/${projectName}/${selectedApp}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const access_token = localStorage.getItem('access_token');
      const token_type = localStorage.getItem('token_type') || 'Bearer';

      if (!access_token) {
        console.error('No access token found');
        return;
      }

      try {
        const response = await axios.get(
          `http://babyhelm-api-svc.taila53571.ts.net/cluster/applications/${projectName}/${selectedApp}`,
          {
            headers: {
              'accept': 'application/json',
              'Authorization': `${token_type} ${access_token}`
            }
          }
        );
        setAppData(response.data);
      } catch (error) {
        console.error('Error fetching app data:', error);
      }
    };

    if (selectedApp) {
      fetchData();
    }
  }, [projectName, selectedApp]);

  return (
    <div className="applications">
      <div className="application-name">
        <div className="select-wrapper">
          <select id="application-name" value={selectedApp} onChange={handleChange}>
            {applications.map(app => (
              <option key={app.name} value={app.name}>
                {app.name}
              </option>
            ))}
          </select>
        </div>
        <div className='line'/>
      </div>
      {selectedApplication && (
        <div className='application-info'>
            <label htmlFor="deployment-link">Link to app:</label>
            <p>
              {((appData && appData.deployment_link) || selectedApplication.deployment_link) 
                ? <a href={(appData && appData.deployment_link) || selectedApplication.deployment_link} target="_blank" rel="noopener noreferrer">
                    {(appData && appData.deployment_link) || selectedApplication.deployment_link}
                  </a> 
                : 'No link available'}
            </p>
            <label htmlFor="dashboard-link">Link to your monitoring dashboard:</label>
            <p>
              {((appData && appData.dashboard_link) || selectedApplication.dashboard_link) 
                ? <a href={(appData && appData.dashboard_link) || selectedApplication.dashboard_link} target="_blank" rel="noopener noreferrer">
                    {(appData && appData.dashboard_link) || selectedApplication.dashboard_link}
                  </a> 
                : 'No link available'}
            </p>
          <button className="open-button" onClick={handleOpenApp}>Open</button>
        </div>
      )}
    </div>
  );
};

Applications.propTypes = {
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      deployment_link: PropTypes.string,
      dashboard_link: PropTypes.string
    })
  ).isRequired
};

export default Applications;
