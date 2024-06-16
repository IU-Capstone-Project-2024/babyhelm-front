import React from 'react'
import './header.css'
import img from '../../assets/placeholder-1.png'

const Header = () =>  {
  return (
    <div className='babyhelm__header' id='home'>
      <div className='babyhelm__header-content'>
        <h1>
            Kubernetes hosting Create and Monitor Your Clusters Effortlessly
        </h1>
        <button type='button'>
          <p>Get Started</p>
        </button>
      </div>
      <div className='babyhelm__header-image'>
        <img src={img} alt='img'/>
      </div>
    </div>
    
  )
}

export default Header