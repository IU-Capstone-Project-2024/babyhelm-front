import React, { useState } from 'react'
import { Auth } from '../../components'
import { Header, Whyus } from '../../containers'


const Home = () => {

  const [isAuthVisible, setAuthVisible] = useState(false);

  const toggleAuthModal = () => {
    setAuthVisible(!isAuthVisible);
  };

  return (
    <div className="Home">
      <Header toggleAuthModal={toggleAuthModal} />
      {isAuthVisible && <Auth toggleAuthModal={toggleAuthModal} />}
      <Whyus />
    </div>
  )
}

export default Home

