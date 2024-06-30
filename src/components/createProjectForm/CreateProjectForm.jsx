import React, { useState } from 'react';
import './createProjectForm.css';

const CreateProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Project Name:', projectName);
    console.log('Project Description:', projectDescription);
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
