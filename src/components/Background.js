import React, { useState, useEffect } from 'react';
import { checkIfMobile } from '../utils/screensize';

const Background = () => {
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

        return `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 68, 0, 0.5), transparent 70%)`;
    };

    return (
        <div style={{
                background: `
                    ${calculateGradient()}
                `,
                height: isMobile ? '86vh' : '100vh',
                width: '100vw',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        ></div>
    );
}

export default Background;