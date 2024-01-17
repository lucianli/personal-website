import React from 'react';
import '../styles/about.css';
import '../styles/App.css';
import { checkIfMobile } from '../utility/screensize';

const About = () => {
    const isMobile = checkIfMobile();

    return (
        <div>
            <p className={isMobile ? "title mobileTitle" : "title"}>About Me</p>
            <p className={isMobile ? "about__content about__mobileContent" : "about__content"}>
                Hi, I'm Lucian. I'm currently studying Computer Science at UCLA, and 
                am looking for opportunities in Software Engineering with interest and experience 
                in front-end and full-stack development. I am passionate about blending 
                design and development, and hope to make a meaningful impact on the world around me 
                by creating seamless and user-centric digital experiences. 
            </p>
        </div>
    );
}

export default About;