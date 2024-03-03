import React, { useContext } from 'react';
import '../styles/about.css';
import '../styles/App.css';
import { checkIfMobile } from '../utils/screensize';
import { PageContext } from '../utils/pageContext';
import { Link } from 'react-router-dom';

const About = () => {
    const { page, setPage } = useContext(PageContext);
    const isMobile = checkIfMobile();

    return (
        <div>
            <p className={isMobile ? "title mobileTitle" : "title"}>About Me</p>
            <p className={isMobile ? "about__content about__mobileContent" : "about__content"}>
                <p className={"about__bold"}>Hi, I'm Lucian.</p> I'm currently studying Computer 
                Science at UCLA, and am looking for opportunities in Software Engineering with interest 
                and experience in <p className={"about__bold"}>front-end and full-stack development</p>. 
                I am passionate about blending design and development, and hope to make a meaningful impact 
                on the world around me by creating seamless and user-centric digital experiences. 
            </p>
            <p className={isMobile ? "about__content about__mobileContent" : "about__content"}>
                As I get closer to graduating and finishing my education, one of my top priorities is to foster
                a <p className={"about__bold"}>habit of continuous learning outside the classroom</p>. In an effort 
                to achieve this, and stay up-to-date on new technologies, every month I will be teaching myself 
                a new programming language/tech stack through the creation of a project, and documenting my journey
                <Link to="/blog" onClick={() => setPage("blog")} className={"about__bold about__link"}> here</Link>. 
            </p>
        </div>
    );
}

export default About;