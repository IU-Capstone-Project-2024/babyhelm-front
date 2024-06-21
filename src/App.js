import React, { useState } from 'react'
import { NavBar, Auth } from './components'
import { Header, Whyus } from './containers'
import './index.css'

function App() {

  const [isAuthVisible, setAuthVisible] = useState(false);

  const toggleAuthModal = () => {
    setAuthVisible(!isAuthVisible);
  };

  return (
    <div className="App">
      <NavBar toggleAuthModal={toggleAuthModal} />
      {isAuthVisible && <Auth toggleAuthModal={toggleAuthModal} />}
      <Header toggleAuthModal={toggleAuthModal} />
      <Whyus />
    </div>
  )
}

export default App

