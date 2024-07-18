import React, { useEffect, useState } from 'react';
import axios from 'axios';
import appbackground from '../../assets/appbackground.png';
import { AppInfoBlock } from '../../components';
import './appInfo.css';
import { useParams } from 'react-router-dom';

const AppInfo = () => {
  const { projectName, appName } = useParams();

  const [appData, setAppData] = useState(null);

  const mockAppData = {
    appName: "Sample Application",
    dockerImageLink: "registry/sample-image:latest",
    externalPort: 80,
    targetPort: 80,
    envVariables: [
      { name: "ENV_VAR_1", value: "value1" },
      { name: "ENV_VAR_2", value: "value2" },
      { name: "ENV_VAR_3", value: "value3" },
    ],
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
          `http://babyhelm-api-svc.taila53571.ts.net/cluster/applications/${projectName}/${appName}`,
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

    fetchData();
  }, [projectName, appName]);

  if (!appData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='appInfo'>
      <div className='appInfo__left-block'>
        <div className='appInfo__left-block-img'>
          <img src={appbackground} alt='app' />
        </div>
      </div>

      <div className='appInfo__right-block'>
        <AppInfoBlock
          appName={appData.name}
          dockerImageLink={appData.image}
          externalPort={mockAppData.externalPort} // Assuming these are constants or fetched from another source
          targetPort={mockAppData.targetPort}     // Assuming these are constants or fetched from another source
          envVariables={appData.envs}
          deploymentLink={appData.deployment_link}
          dashboardLink={appData.dashboard_link}
        />
      </div>
    </div>
  );
};

export default AppInfo;
