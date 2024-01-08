import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <div>
                <a href="https://chromewebstore.google.com/detail/clearify/dfngmknjomojmdmnockpdpmpnbbhibfi">
                    <h3>Clearify</h3>
                </a>
                <p>
                    A Chrome extension enabling easy identification and analysis of 
                    ingredients in skincare products to demystify skincare shopping 
                    for the average consumer.
                </p>
            </div>
            <div>
                <a href="https://apps.apple.com/us/app/populus-live-nba-fantasy-game/id1613982276">
                    <h3>Populus Fantasy Basketball</h3>
                </a>
                <p>
                    A fantasy sports app that simulates a virtual stock market by 
                    enabling users to trade shares of basketball players, join leagues, 
                    and engage in various competitive game modes.
                </p>
            </div>
            <div>
                <a href="https://www.uclaswipeouthunger.org/">
                    <h3>UCLA Swipe Out Hunger Website</h3>
                </a>
                <p>
                    An interactive and responsive external website for Swipe Out Hunger, 
                    UCLA's leading student food insecurity organization.
                </p>
            </div>
        </section>
    );
}

export default Projects;