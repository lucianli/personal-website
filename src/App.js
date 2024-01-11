import './styles/App.css';
import './styles/fonts.css';
import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import noiseSvg from './assets/noisefilter.svg';

function App() {
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const handleMouseMove = (e) => {
    setMousePos({x: e.clientX, y: e.clientY});
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  const calculateGradient = () => {
    const gradientX = (mousePos.x / window.innerWidth) * 100;
    const gradientY = (mousePos.y / window.innerHeight) * 100;

    return `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(70, 70, 70, 0.4) 10%, transparent), url(${noiseSvg})`;
  };

  const [curPage, setCurPage] = useState('about');
  // const handleClick = (page) => {
  //   setCurPage(page);
  // };

  const displayCurPage = () => {
    if (curPage == 'projects') {
      return <Projects/>
    } else if (curPage == 'contact') {
      return <Contact/>
    } else {
      return <About/>
    }
  }

  return (
    <div 
      className="App"
    >
      <div 
        className="background"
        style={{
          background: `
            ${calculateGradient()}
          `,
        }}
      />
      <div className="header">
        <Header/>
        <p className="menuLink">About</p>
        <p className="menuLink">Projects</p>
        <p className="menuLink">Contact</p>
      </div>
      <div className="content">
        {displayCurPage()}
      </div>
    </div>
    
  );
};

export default App;
