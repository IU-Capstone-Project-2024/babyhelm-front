import React, { useState } from 'react';
import axios from 'axios';
import './appInfoBlock.css';
import { useParams } from 'react-router-dom';
import restart from '../../assets/rotate.png'

const AppInfoBlock = ({
  appName,
  dockerImageLink,
  externalPort,
  targetPort,
  envVariables,
  deploymentLink,
  dashboardLink
}) => {
  const { projectName } = useParams();
  
  // State for handling pop-up messages
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleRestart = async (e) => {
    e.preventDefault();

    const access_token = localStorage.getItem('access_token');
    const token_type = localStorage.getItem('token_type') || 'Bearer';

    if (!access_token) {
      console.error('No access token found');
      setPopupMessage('No access token found');
      setIsPopupVisible(true);
      setTimeout(() => setIsPopupVisible(false), 3000);
      return;
    }

    try {
      const response = await axios.patch(
        `http://babyhelm-api-svc.taila53571.ts.net/cluster/applications/${projectName}/${appName}/restart`,
        {},
        {
          headers: {
            'accept': 'application/json',
            'Authorization': `${token_type} ${access_token}`
          }
        }
      );

      console.log('Application restarted', response.data);
      setPopupMessage('Application restarted successfully');
      setIsPopupVisible(true);
      setTimeout(() => setIsPopupVisible(false), 3000);

    } catch (error) {
      console.error('Error restart', error);
      setPopupMessage('Error restarting the application');
      setIsPopupVisible(true);
      setTimeout(() => setIsPopupVisible(false), 3000);
    }
  };

  return (
    <div className="appInfoBlock">
      <h2 className="appInfoBlock-title">
        {appName} 
        <button className='restart-button' onClick={handleRestart}>
          Restart
          <img src={restart} alt='restart'/>
        </button>
      </h2>
      <div className='links'>
        <div className='link'>
          <label htmlFor="deployment-link">Product link:</label>
          <a id="deployment-link" href={deploymentLink}>{deploymentLink}</a>
        </div>
        <div className='link'>
          <label htmlFor="dashboard-link">Monitoring link:</label>   
          <a id="dashboard-link" href={dashboardLink}>{dashboardLink}</a>  
        </div>
      </div>
      
      <table className="appInfoBlock-info-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>External Port</th>
            <th>Target Port</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dockerImageLink}</td>
            <td>{externalPort}</td>
            <td>{targetPort}</td>
          </tr>
        </tbody>
      </table>
      <h3>Environment variables</h3>
      <table className="appInfoBlock-env-table">
        <tbody>
          {envVariables.map((env, index) => (
            <tr key={index}>
              <td>{env.name}</td>
              <td>{env.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isPopupVisible && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default AppInfoBlock;
