import React from 'react'
import './navbar.css' 
import logo from '../../assets/logo.svg'
import unlock from '../../assets/unlock 1.svg'

const NavBar = () => {
  return (
    <div className="babyhelm__navbar">
      <div className='babyhelm__navbar_logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='babyhelm__navbar_title'>
          <a href="/">Babyhelm</a>
      </div>
      <div className='babyhelm__navbar-sign'>
        <button type="button">
          <img src={unlock} alt='unlock'/>
          <p>Log in</p>
        </button>
      </div>
    </div>
  )
}

export default NavBar