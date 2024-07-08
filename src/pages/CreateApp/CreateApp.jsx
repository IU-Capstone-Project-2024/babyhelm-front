import React from 'react'
import createapp from '../../assets/createapp.png'
import { CreateAppForm } from '../../components'
import './createApp.css'
import cross from '../../assets/cross.png'
const CreateApp = () => {
  return (
    <div className='create-app'>
      <div className='create-app__left-block'>
        <div className='create-app__close-block'>
          <a href='/project'><img src={cross} alt='cross'/></a>
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