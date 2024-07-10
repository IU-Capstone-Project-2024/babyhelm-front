import React from 'react'
import appbackground from '../../assets/appbackground.png'
import { AppInfoBlock } from '../../components'
import './appInfo.css'

const AppInfo = () => {

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


    return (
        <div className='appInfo'>
          <div className='appInfo__left-block'>
            <div className='appInfo__left-block-img'>
              <img src={appbackground} alt='app'/>
            </div>
          </div>
          
          
          <div className='appInfo__right-block'>
            <AppInfoBlock
              appName={mockAppData.appName}
              dockerImageLink={mockAppData.dockerImageLink}
              externalPort={mockAppData.externalPort}
              targetPort={mockAppData.targetPort}
              envVariables={mockAppData.envVariables}
            />
          </div>
          
        </div>
      )
}

export default AppInfo
