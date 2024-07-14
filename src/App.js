import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { NavBar, Auth } from './components';
import './index.css';
import Projects from './pages/Projects/Projects';
import CreateProject from './pages/CreateProject/CreateProject';
import Project from './pages/Project/Project';
import CreateApp from './pages/CreateApp/CreateApp';
import AppInfo from './pages/AppInfo/AppInfo';

function App() {
  const [isAuthVisible, setAuthVisible] = useState(false);

  const toggleAuthModal = () => {
    setAuthVisible(!isAuthVisible);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar toggleAuthModal={toggleAuthModal} />
        {isAuthVisible && <Auth toggleAuthModal={toggleAuthModal} />}
      
        <Routes>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/create-project' element={<CreateProject />} />
          <Route path='/project/:projectName' element={<Project />} />
          <Route path='/project/:projectName/create-app' element={<CreateApp />} />
          <Route path='/project/:projectName/:appName' element={<AppInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
