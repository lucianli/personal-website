import './styles/App.css';
import './styles/fonts.css';
import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import noiseSvg from './assets/noisefilter.svg';
import { ReactComponent as NewTabIcon } from './assets/newtab-icon.svg';
import { checkIfMobile } from './utility/screensize';

const App = () => {
  const isMobile = checkIfMobile();

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

    return `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 68, 0, 0.6), transparent 70%)`;
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
    <div className={isMobile ? "App mobileApp" : "App"}>
      <div 
        className={isMobile ? "background mobileBackground" : "background"}
        style={{
          background: `
            ${calculateGradient()}
          `,
        }}
      ></div>
      <div className={isMobile ? "mobileHeader" : "header"}>
        <Header/>
        <div className={isMobile ? "mobileMenu" : ""}>
          <p 
            className={isMobile ? "link menuLinkText mobileMenuLinkText" : "link menuLinkText"} 
            onClick={() => handlePageChange("about")}
          >
            {curPage === "about" ? "»" : "About Me"}
          </p>
          <p 
            className={isMobile ? "link menuLinkText mobileMenuLinkText" : "link menuLinkText"} 
            onClick={() => handlePageChange("projects")}
          >
            {curPage === "projects" ? "»" : "Projects"}
          </p>
          <p 
            className={isMobile ? "link menuLinkText mobileMenuLinkText" : "link menuLinkText"} 
            onClick={() => handlePageChange("contact")}
          >
            {curPage === "contact" ? "»" : "Contact"}
          </p>
          <a 
            className={"link menuLinkText"}
            href="https://docs.google.com/document/d/1PDkhg_ukrelUg5-6ZwNTxhVtuIKgMpsatWCQlYxwGK4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={isMobile ? "mobileMenuLinkText" : ""}>
              Resume
              <NewTabIcon className="newtabicon" height={12} width={12}/>
            </p>
          </a>
        </div>
      </div>
      <div className={isMobile ? "content mobileContent" : "content"}>
        {displayCurPage()}
      </div>
    </div>
    
  );
};

export default App;
