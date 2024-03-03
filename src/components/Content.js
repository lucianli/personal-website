import "../styles/App.css";
import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import { checkIfMobile } from '../utils/screensize';

const Content = () => {
    const location = useLocation();
    const isMobile = checkIfMobile();
  
    return (
        <div className={isMobile ? "content mobileContent" : "content"}>
            <TransitionGroup>
                <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={500}
                >
                    <Routes location={location}>
                        <Route exact path="/" Component={About} />
                        <Route exact path="/projects" Component={Projects} />
                        <Route exact path="/blog" Component={Blog} />
                        <Route exact path="/contact" Component={Contact} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
};

export default Content;