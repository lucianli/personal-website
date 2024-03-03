import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import '../styles/leftview.css';
import { checkIfMobile } from '../utils/screensize';

const LeftView = () => {
    const isMobile = checkIfMobile();

    return (
        <div className={isMobile ? "leftview__mobileContainer" : "leftview__container"}>
            <Header/>
            <Navigation/>
        </div>
    );
}

export default LeftView;