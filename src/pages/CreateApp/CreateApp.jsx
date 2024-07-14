import React from 'react'
import createapp from '../../assets/createapp.png'
import { CreateAppForm } from '../../components'
import { useParams } from 'react-router-dom'
import './createApp.css'
import cross from '../../assets/cross.png'
const CreateApp = () => {

  const { projectName } = useParams();

  console.log(projectName);

  const link = `/project/${projectName}`

  return (
    <div className='create-app'>
      <div className='create-app__left-block'>
        <div className='create-app__close-block'>
          <a href={link}><img src={cross} alt='cross'/></a>
        </div>
        <div className='create-app__left-block-img'>
          <img src={createapp} alt='create app'/>
        </div>
      </div>
      
      <div className='create-app__form'>
        <CreateAppForm />
      </div>
      
    </div>
  )
}

export default CreateApp