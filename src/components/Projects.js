import React from 'react';
import '../styles/projects.css';
import '../styles/App.css';
import { ReactComponent as NewTabIcon } from '../assets/newtab-icon.svg';

const Projects = () => {
    return (
        <div>
            <p className="title">Projects</p>
            <a 
                href="https://chromewebstore.google.com/detail/clearify/dfngmknjomojmdmnockpdpmpnbbhibfi" 
                className="link projects__linktext"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className="projects__title">
                    Clearify
                    <NewTabIcon className="newtabicon" height={18} width={18}/>
                </p>
                <p className="projects__techstack">React ∙ JavaScript ∙ HTML/CSS ∙ Manifest V3</p>
                <p className="projects__description">
                    A Chrome extension enabling easy identification and analysis of 
                    ingredients in skincare products to demystify skincare shopping 
                    for the average consumer.
                </p>
            </a>
            <a 
                href="https://apps.apple.com/us/app/populus-live-nba-fantasy-game/id1613982276" 
                className="link projects__linktext"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className="projects__title">
                    Populus Fantasy Basketball
                    <NewTabIcon className="newtabicon" height={18} width={18}/>
                </p>
                <p className="projects__techstack">Figma ∙ React Native ∙ JavaScript ∙ Node.js ∙ MongoDB </p>
                <p className="projects__description">
                    A fantasy sports app that simulates a virtual stock market by 
                    enabling users to trade shares of basketball players, join leagues, 
                    and engage in various competitive game modes.
                </p>
            </a>
            <a 
                href="https://www.uclaswipeouthunger.org/" 
                className="link projects__linktext"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className="projects__title">
                    UCLA Swipe Out Hunger Website
                    <NewTabIcon className="newtabicon" height={18} width={18}/>
                </p>
                <p className="projects__techstack">React ∙ JavaScript ∙ HTML/CSS ∙ Gatsby ∙ Netlify</p>
                <p className="projects__description">
                    An interactive and responsive external website for Swipe Out Hunger, 
                    UCLA's leading student food insecurity organization.
                </p>
            </a>
        </div>
    );
}

export default Projects;