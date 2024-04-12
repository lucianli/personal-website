import React from 'react';
import '../styles/blog.css';
import '../styles/App.css';
import { checkIfMobile } from '../utils/screensize';
import { ReactComponent as NewTabIcon } from '../assets/newtab-icon.svg';

const Blog = () => {
    const isMobile = checkIfMobile();

    return (
        <div>
            <p className={isMobile ? "title mobileTitle" : "title"}>Blog: A Project A Month</p>
            <p className={isMobile ? "blog__content blog__mobileContent" : "blog__content"}>
                As I get closer to graduating and finishing my education, one of my top priorities is
                to foster a <p className={"blog__bold"}>habit of continuous learning outside the classroom</p>. 
                In an effort to achieve this, and stay up-to-date on new technologies, I will be teaching myself 
                a <p className={"blog__bold"}>new programming language/tech stack every month </p> with the hopes
                of having a completed project at the end of the month. I will be documentingmy progress in this 
                blog as a way to take notes and keep track of what I learned throughout the process.
            </p>
            <div className={isMobile ? "blog__mobileSection" : "blog__section"}>
                <a 
                    href="https://github.com/lucianli/cookbook-graphql" 
                    className="link blog__linktext"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className={isMobile ? "blog__title blog__mobileTitle" : "blog__title"}>
                        March 2024: Cookbook
                        <NewTabIcon className="newtabicon" height={isMobile ? 14 : 18} width={isMobile ? 14 : 18}/>
                    </p>
                    <p className={isMobile ? "blog__techstack blog__mobileTechstack" : "blog__techstack"}>
                        GraphQL ∙ Node.js ∙ Mongoose ∙ MongoDB ∙ Supertest
                    </p>
                </a>
                <p className={isMobile ? "blog__content blog__mobileContent" : "blog__content"}>
                    This month I created Cookbook, a GraphQL API that uses Mongoose to seamlessly query a MongoDB database.
                    I created two models to interact with: users and recipes, the idea being that users would be able to 
                    create recipes, edit them, and save recipes published by other users.
                </p>
                <p className={isMobile ? "blog__content blog__mobileContent" : "blog__content"}>
                    By leveraging the power of GraphQL to provide customized endpoints, clients have more control and are 
                    able to specify the exact information they wish to retrieve or update. This approach is a step above
                    traditional REST APIs since it minimizes the amount of fetches and allows the client to define the 
                    structure of the data.
                </p>
                <p className={isMobile ? "blog__content blog__mobileContent" : "blog__content"}>
                    Furthermore, to guarantee the reliability and robustness of my the Cookbook API, I implemented a 
                    comprehensive suite of test cases using Supertest to ensure proper functionality for every query 
                    and mutation defined in the GraphQL schema. The next steps for this project would be to create
                    a frontend interface for users and possible expand the GraphQL schemas.
                </p>
            </div>
            <div className={isMobile ? "blog__mobileSection" : "blog__section"}>
                {/* <a 
                    href="" 
                    className="link blog__linktext"
                    target="_blank"
                    rel="noopener noreferrer"
                > */}
                    <p className={isMobile ? "blog__title blog__mobileTitle" : "blog__title"}>
                        April 2024: Chess AI
                        {/* <NewTabIcon className="newtabicon" height={isMobile ? 14 : 18} width={isMobile ? 14 : 18}/> */}
                    </p>
                    <p className={isMobile ? "blog__techstack blog__mobileTechstack" : "blog__techstack"}>
                        
                    </p>
                {/* </a> */}
                <p className={isMobile ? "blog__content blog__mobileContent" : "blog__content"}>
                    Work in progress...
                </p>
            </div>
        </div>
    );
}

export default Blog;