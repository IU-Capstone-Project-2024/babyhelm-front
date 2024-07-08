import React from 'react'
import { HeroProject, Applications, Collaborators } from '../../components'
import './project.css'
const Projects = () => {
  return (
    <>   
      <div className='hero'>
        <HeroProject />
      </div>
      <div className='work-space'>
        <div className='collaborators-block'>
          <h1>Collaborators</h1>
          <Collaborators />
        </div>
        <div className='applications-block'>
          <h1>Applications</h1>
          <div className='line'/>
          <Applications />
        </div>
        
      </div> 
    </>
  )
}

export default Projects