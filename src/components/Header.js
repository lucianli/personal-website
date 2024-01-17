import React from 'react';
import '../styles/header.css';
import {checkIfMobile} from '../utility/screensize';

const Header = () => {
    const isMobile = checkIfMobile();

    return (
        <div>
            <p className={isMobile ? "header__title header__mobileTitle" : "header__title"}>Lucian Li</p>
            <p className={isMobile ? "header__headline header__mobileHeadline" : "header__headline"}>Computer Science student at UCLA. <br></br>Aspiring Software Engineer.</p>
        </div>
    );
}

export default Header;