import React from 'react'
import { NavBar } from './components'
import { Header, Whyus } from './containers'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
        <Whyus />
      </div>
    </div>
  )
}

export default App

