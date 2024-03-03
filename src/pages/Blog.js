import React from 'react';
import '../styles/blog.css';
import '../styles/App.css';
import '../styles/blog.css';
import { checkIfMobile } from '../utils/screensize';

const Blog = () => {
    const isMobile = checkIfMobile();

    return (
        <div>
            <p className={isMobile ? "title mobileTitle" : "title"}>APAM: A Project A Month</p>
            <p className={isMobile ? "blog__content blog__mobileContent" : "blog__content"}>
                As I get closer to graduating and finishing my education, one of my top priorities is
                to foster a <p className={"blog__bold"}>habit of continuous learning outside the classroom</p>. 
                In an effort to achieve this, and stay up-to-date on new technologies, I will be teaching myself 
                a <p className={"blog__bold"}>new programming language/tech stack every month </p> with the hopes
                of having a completed project at the end of the month. I will be documentingmy progress in this 
                blog as a way to take notes and keep track of what I learned throughout the process.
            </p>
            <p className={isMobile ? "blog__mobileHeading" : "blog__heading"}>March 2024: TypeScript/GraphQL</p>
            <p className={isMobile ? "blog__content blog__mobileContent" : "blog__content"}>
                Coming soon...
            </p>
        </div>
    );
}

export default Blog;