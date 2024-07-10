import React, { useState } from 'react';
import './createAppForm.css';

const CreateAppForm = () => {
  const [appName, setAppName] = useState('');
  const [dockerImageLink, setDockerImageLink] = useState('');
  const [externalPort, setExternalPort] = useState('');
  const [targetPort, setTargetPort] = useState('');
  const [envVariables, setEnvVariables] = useState([{ name: '', value: '' }]);

  const handleEnvChange = (index, e) => {
    const values = [...envVariables];
    values[index][e.target.name] = e.target.value;
    setEnvVariables(values);
  };

  const handleAddEnv = () => {
    setEnvVariables([...envVariables, { name: '', value: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('App Name:', appName);
    console.log('Docker Image Link:', dockerImageLink);
    console.log('External Port:', externalPort);
    console.log('Target Port:', targetPort);
    console.log('Environment Variables:', envVariables);
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
      <button type="submit" className="createAppForm-button">Send form</button>
    </form>
  );
};

export default CreateAppForm;