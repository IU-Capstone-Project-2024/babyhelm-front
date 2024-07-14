import React from 'react';
import axios from 'axios';
import './appInfoBlock.css';
import { useParams } from 'react-router-dom';

const AppInfoBlock = ({
  appName = "Application name",
  dockerImageLink = "<registry>/<image>:<tag>",
  externalPort = "80",
  targetPort = "80",
  envVariables = [
    { name: "NAME1", value: "VALUE1" },
    { name: "NAME2", value: "VALUE2" },
    { name: "NAME3", value: "VALUE3" },
  ],
}) => {

  const { projectName } = useParams();

  const handleRestart = async(e) => {
    e.preventDefault();
    
    const access_token = localStorage.getItem('access_token');
    const token_type = localStorage.getItem('token_type') || 'Bearer';

    console.log(access_token)

    if (!access_token) {
      console.error('No access token found');
      return;
    }

    try {
      const response = await axios.patch(
        `http://babyhelm-api-svc.taila53571.ts.net/cluster/applications/${projectName}/${appName}/restart`, 
        {}, // Empty data object for PATCH request
        {
          headers: {
            'accept': 'application/json',
            'Authorization': `${token_type} ${access_token}`
          }
        }
      );

      console.log('Application restarted', response.data);

    } catch (error) {
      console.error('Error restart', error);
    }

  }
  return (
    <div className="appInfoBlock">
      <h2 className="appInfoBlock-title">{appName} <span role="img" aria-label="sync" onClick={handleRestart}>🔄</span></h2>
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
    </div>
  );
};

export default AppInfoBlock;
