import React from "react";
import "./Home.css";
import profileImage from "../../assets/profile.jpg"; // Correct path relative to Home.js

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div 
                        className="home__image" 
                        style={{ backgroundImage: `url(${profileImage})` }} 
                    ></div>
                    <Data />
                </div>
            </div>
        </section>
    );
}

export default Home;
