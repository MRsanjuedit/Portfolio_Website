import React from "react";
import { UilInstagram, UilDribbble, UilGithubAlt } from '@iconscout/react-unicons';

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <UilInstagram />
            </a>
            <a href="https://dribbble.com/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <UilDribbble />
            </a>
            <a href="https://github.com/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <UilGithubAlt />
            </a>
        </div>
    );
};

export default Social;
