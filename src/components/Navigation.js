import '../styles/navigation.css';
import '../styles/fonts.css';
import React, { useContext } from 'react';
import { PageContext } from '../utils/pageContext';
import { ReactComponent as NewTabIcon } from '../assets/newtab-icon.svg';
import { checkIfMobile } from '../utils/screensize';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const isMobile = checkIfMobile();
    const { page, setPage } = useContext(PageContext);

    return (
        <div className={isMobile ? "navigation__mobileMenu" : ""}>
            <Link
                to="/"
                className={isMobile ? "link navigation__menuLinkText navigation__mobileMenuLinkText" : "link navigation__menuLinkText"} 
                onClick={() => setPage("about")}
            >
                {page === "about" ? (isMobile ? "•" : "»") : "About Me"}
            </Link>
            <Link 
                to="/projects"
                className={isMobile ? "link navigation__menuLinkText navigation__mobileMenuLinkText" : "link navigation__menuLinkText"}
                onClick={() => setPage("projects")}
            >
                {page === "projects" ? (isMobile ? "•" : "»") : "Projects"}
            </Link>
            <Link 
                to="/blog"
                className={isMobile ? "link navigation__menuLinkText navigation__mobileMenuLinkText" : "link navigation__menuLinkText"}
                onClick={() => setPage("blog")}
            >
                {page === "blog" ? (isMobile ? "•" : "»") : "Blog"}
            </Link>
            <Link 
                to="/contact"
                className={isMobile ? "link navigation__menuLinkText navigation__mobileMenuLinkText" : "link navigation__menuLinkText"}
                onClick={() => setPage("contact")}
            >
                {page === "contact" ? (isMobile ? "•" : "»") : "Contact"}
            </Link>
            <a 
                className={"link navigation__menuLinkText"}
                href="https://docs.google.com/document/d/1PDkhg_ukrelUg5-6ZwNTxhVtuIKgMpsatWCQlYxwGK4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className={isMobile ? "navigation__mobileMenuLinkText" : ""}>
                Resume
                <NewTabIcon className="newtabicon" height={12} width={12}/>
                </p>
            </a>
        </div>
    );
}

export default Navigation;