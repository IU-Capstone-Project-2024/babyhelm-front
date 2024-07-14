import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './applications.css';
import { useNavigate, useParams } from 'react-router-dom';

const Applications = ({ applications }) => {
  const [selectedApp, setSelectedApp] = useState(applications.length > 0 ? applications[0].name : '');

  const handleChange = (event) => {
    setSelectedApp(event.target.value);
  };

  const { projectName } = useParams();

  const navigate = useNavigate()

  const selectedApplication = applications.find(app => app.name === selectedApp);

  const handleOpenApp = () => {
    navigate(`/project/${projectName}/${selectedApp}`);
  }

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
          <label htmlFor="product-link">Link to your product:</label>
          <p>{selectedApplication.link || 'No link available'}</p>
          <label htmlFor="dashboard-link">Link to your monitoring dashboard:</label>
          <p>{selectedApplication.dashboardLink || 'No link available'}</p>
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
      link: PropTypes.string,
      dashboardLink: PropTypes.string
    })
  ).isRequired
};

export default Applications;
