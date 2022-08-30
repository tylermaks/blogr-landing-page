import React from "react"
import Nav from "../Components/Nav";

import "../Assets/Styles/Hero/Hero.css"

function Hero(){
    return(
        <section id="hero">
            <Nav />
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div className="btn-container">
                <button className="main-btn">Start for Free</button>
                <button className="alt-btn">Learn More</button>
            </div>
        </section>
    )
}

export default Hero;