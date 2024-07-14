import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { HeroProject, Applications, Collaborators } from '../../components';
import './project.css';

const Project = () => {
  const { projectName } = useParams();
  const [projectData, setProjectData] = useState(null);
  console.log(projectName);
  useEffect(() => {
    const fetchProjectData = async () => {
      const access_token = localStorage.getItem('access_token');
      const token_type = localStorage.getItem('token_type') || 'Bearer';
      
      if (!access_token) {
        console.error('No access token found');
        return;
      }
      
      console.log(access_token)

      try {
        const api = `http://babyhelm-api-svc.taila53571.ts.net/cluster/projects/${projectName}`;
        const response = await axios.get(api, {
          headers: {
            'accept': 'application/json',
            'Authorization': `${token_type} ${access_token}`
          }
        });

        setProjectData(response.data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      } 
    };

    fetchProjectData();
  }, [projectName]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <>   
      <div className='hero'>
        <HeroProject projectName={projectData.name} />
      </div>
      <div className='work-space'>
        <div className='collaborators-block'>
          <h1>Collaborators</h1>
          <Collaborators users={projectData.users} />
        </div>
        <div className='applications-block'>
          <h1>Applications</h1>
          <div className='line'/>
          <Applications applications={projectData.applications} />
        </div>
      </div> 
    </>
  );
};

export default Project;
