import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import './createAppForm.css';

const CreateAppForm = () => {
  const [appName, setAppName] = useState('');
  const [dockerImageLink, setDockerImageLink] = useState('');
  const [externalPort, setExternalPort] = useState('');
  const [targetPort, setTargetPort] = useState('');
  const [envVariables, setEnvVariables] = useState([{ name: '', value: '' }]);

  const navigate = useNavigate();
  
  const { projectName } = useParams();

  const handleEnvChange = (index, e) => {
    const values = [...envVariables];
    values[index][e.target.name] = e.target.value;
    setEnvVariables(values);
  };

  const handleAddEnv = () => {
    setEnvVariables([...envVariables, { name: '', value: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const access_token = localStorage.getItem('access_token');
    const token_type = localStorage.getItem('token_type') || 'Bearer';

    if (!access_token) {
      console.error('No access token found');
      return;
    }

    const payload = {
      "application": {
        "name": appName,
        "image": dockerImageLink,
        "ports": {
          "port": parseInt(externalPort, 10),
          "targetPort": parseInt(targetPort, 10)
        },
        "envs": envVariables
      }
    };

    console.log(payload)
    
    try {
      const response = await axios.post(`http://babyhelm-api-svc.taila53571.ts.net/cluster/applications/${projectName}`, payload, {
        headers: {
          'accept': 'application/json',
          'Authorization': `${token_type} ${access_token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Application created:', response.data);
      
      navigate(`/project/${projectName}/${encodeURIComponent(response.data.name)}`);

    } catch (error) {
      console.error('Error creating application:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="createAppForm">
      <h2 className="createAppForm-title">Create application</h2>
      <div className="createAppForm-input-group">
        <label className="createAppForm-label">Application name</label>
        <input
          type="text"
          placeholder="Enter your application name"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          className="createAppForm-input createAppForm-input-name"
        />
      </div>
      <div className="createAppForm-input-group">
        <label className="createAppForm-label">Link to your Docker image</label>
        <input
          type="text"
          placeholder="Add your link"
          value={dockerImageLink}
          onChange={(e) => setDockerImageLink(e.target.value)}
          className="createAppForm-input createAppForm-input-docker"
        />
      </div>
      <div className="createAppForm-port-group">
        <div className="createAppForm-input-group">
          <label className="createAppForm-label">External Port</label>
          <input
            type="text"
            placeholder="Default 80"
            value={externalPort}
            onChange={(e) => setExternalPort(e.target.value)}
          className="createAppForm-input createAppForm-input-port"
          />
        </div>
        <div className="createAppForm-input-group">
          <label className="createAppForm-label">Target Port</label>
          <input
            type="text"
            placeholder="Default 80"
            value={targetPort}
            onChange={(e) => setTargetPort(e.target.value)}
          className="createAppForm-input createAppForm-input-port"
          />
        </div>
      </div>
      <div className="createAppForm-input-group">
        <label className="createAppForm-label">Environment variables</label>
        {envVariables.map((env, index) => (
          <div key={index} className="createAppForm-env-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={env.name}
              onChange={(e) => handleEnvChange(index, e)}
              className="createAppForm-input createAppForm-input-env"
            />
            <input
              type="text"
              placeholder="Value"
              name="value"
              value={env.value}
              onChange={(e) => handleEnvChange(index, e)}
              className="createAppForm-input createAppForm-input-env"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddEnv} className="createAppForm-add-env-btn">
          +
        </button>
      </div>
      <button type="submit" onSubmit={handleSubmit} className="createAppForm-button">Send form</button>
    </form>
  );
};

export default CreateAppForm;
