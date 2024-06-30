import React from 'react'
import createproject from '../../assets/createproject.png'
import { CreateProjectForm } from '../../components'
import './createProject.css'
import cross from '../../assets/cross.png'
const CreateProject = () => {
  return (
    <div className='create-project'>
      <div className='create-project_form'>
        <div className='title-block'>
          <a href='/projects'><img src={cross} alt='cross'/></a>
          <p>Create project</p>
        </div>
        <CreateProjectForm />
      </div>
      <div className='create-project_img'>
        <img src={createproject} alt='create project'/>
      </div>
    </div>
  )
}

export default CreateProject