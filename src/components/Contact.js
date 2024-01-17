import React from 'react';
import '../styles/contact.css';
import '../styles/App.css';
import { ReactComponent as NewTabIcon } from '../assets/newtab-icon.svg';
import { checkIfMobile } from '../utility/screensize';

const Contact = () => {
    const isMobile = checkIfMobile();

    return (
        <div>
            <p className={isMobile ? "title mobileTitle" : "title"}>Contact</p>
            <div className={isMobile ? "contact__linkcontainer" : ""}>
                <a href="https://www.linkedin.com/in/lucian-li/" className="link contact__link">
                    <p className={isMobile ? "contact__linktext contact__mobileLinktext" : "contact__linktext"}>
                        LinkedIn<NewTabIcon className="newtabicon" height={12} width={12}/>
                    </p>
                </a>
                <a href="https://github.com/lucianli" className="link contact__link">
                    <p className={isMobile ? "contact__linktext contact__mobileLinktext" : "contact__linktext"}>
                        GitHub<NewTabIcon className="newtabicon" height={12} width={12}/>
                    </p>
                </a>
                <a href="mailto:lucianli02@gmail.com" className="link contact__link">
                    <p className={isMobile ? "contact__linktext contact__mobileLinktext" : "contact__linktext"}>
                        Email<NewTabIcon className="newtabicon" height={12} width={12}/>
                    </p>
                </a>
            </div>
        </div>
    );
}

export default Contact;