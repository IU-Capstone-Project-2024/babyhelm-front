import React from 'react'
import './header.css'
import img from '../../assets/placeholder-1.png'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Header = ( { toggleAuthModal } ) =>  {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleGetStarted = () => {
    if (!isLoggedIn) {
      toggleAuthModal()
    }
    navigate('/projects')
  }
  return (
    <div className='babyhelm__header' id='home'>
      <div className='babyhelm__header-content'>
        <h1>
            Kubernetes hosting Create and Monitor Your Clusters Effortlessly
        </h1>
        <button type='button' onClick={handleGetStarted}>
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