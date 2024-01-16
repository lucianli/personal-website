import React from 'react';
import '../styles/contact.css';
import '../styles/App.css';
import { ReactComponent as NewTabIcon } from '../assets/newtab-icon.svg';

const Contact = () => {
    return (
        <div>
            <p className="title">Contact</p>
            <a href="https://www.linkedin.com/in/lucian-li/" className="link contact__link">
                <p className="contact__linktext">
                    LinkedIn
                    <NewTabIcon className="newtabicon" height={12} width={12}/>
                </p>
            </a>
            <a href="https://github.com/lucianli" className="link contact__link">
                <p className="contact__linktext">
                    GitHub
                    <NewTabIcon className="newtabicon" height={12} width={12}/>
                </p>
            </a>
            <a href="mailto:lucianli02@gmail.com" className="link contact__link">
                <p className="contact__linktext">
                    Email
                    <NewTabIcon className="newtabicon" height={12} width={12}/>
                </p>
            </a>
        </div>
    );
}

export default Contact;