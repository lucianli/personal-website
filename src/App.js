import './styles/App.css';
import './styles/fonts.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LeftView from './components/LeftView';
import Background from './components/Background';
import Content from './components/Content';
import { checkIfMobile } from './utils/screensize';


const App = () => {
  const isMobile = checkIfMobile();

  return (
    <Router>
      <div className={isMobile ? "App mobileApp" : "App"}>
        <Background />
        <LeftView />
        <Content />
      </div>
    </Router>
  );
};

export default App;
