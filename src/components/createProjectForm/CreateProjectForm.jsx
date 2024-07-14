import React, { useState } from 'react';
import axios from 'axios';
import './createProjectForm.css';

const CreateProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const access_token = localStorage.getItem('access_token');
    const token_type = localStorage.getItem('token_type') || 'Bearer';

    if (!access_token) {
      console.error('No access token found');
      return;
    }

    try {
      const response = await axios.post('http://babyhelm-api-svc.taila53571.ts.net/cluster/projects', {
        name: projectName,
        description: projectDescription // Add this line if the API accepts a description
      }, {
        headers: {
          'accept': 'application/json',
          'Authorization': `${token_type} ${access_token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Project created:', response.data);
      
      // Redirect or update UI after successful creation
      // For example, redirect to the project's page
      window.location.href = `/project/${encodeURIComponent(response.data.name)}`;

    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Let's start with a name for your project</h2>
      <div className="input-group">
        <div className='name'>
          <input
            type="text"
            placeholder="Enter your project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className='description'>
          <input
            type="text"
            placeholder="Project description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="button">Continue</button>
    </form>
  );
};

export default CreateProjectForm;
