import './styles/App.css';
import './styles/fonts.css';
import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import noiseSvg from './assets/noisefilter.svg';

const App = () => {
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

    return `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(0, 0, 0, 0.3), transparent 50%), url(${noiseSvg})`;
  };

  const [curPage, setCurPage] = useState('about');

  const handlePageChange = (newPage) => {
    setCurPage(newPage);
  };

  const displayCurPage = () => {
    if (curPage === 'projects') {
      return <Projects/>;
    } else if (curPage === 'contact') {
      return <Contact/>;
    } else {
      return <About/>;
    }
  };

  return (
    <div className="App">
      <div 
        className="background"
        style={{
          background: `
            ${calculateGradient()}
          `,
        }}
      ></div>

      <div className="header">
        <Header/>
        <p className="menuLink" onClick={() => handlePageChange("about")}>{curPage === "about" ? "»" : "About"}</p>
        <p className="menuLink" onClick={() => handlePageChange("projects")}>{curPage === "projects" ? "»" : "Projects"}</p>
        <p className="menuLink" onClick={() => handlePageChange("contact")}>{curPage === "contact" ? "»" : "Contact"}</p>
      </div>
      <div className="content">
        {displayCurPage()}
      </div>
    </div>
    
  );
};

export default App;
