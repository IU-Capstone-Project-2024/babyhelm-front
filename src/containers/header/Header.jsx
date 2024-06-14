import React from 'react'
import './header.css'
import img from '../../assets/i (1) 1.png'

function Header() {
  return (
    <div className='babyhelm__header'>
        <div className='babyhelm__header-content'>
          <h1>
            Kubernetes hosting Create and Monitor Your Clusters Effortlessly
          </h1>
        <button>
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