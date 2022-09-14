import React from "react"

import phoneImg from "../Assets/images/illustration-phones.svg"

import "../Assets/Styles/Banner/Banner.css"

function Banner(){
    return(
        <section id="banner">
                <div>
                    <img className="phones-img" src={phoneImg} alt="Phones" />
                </div>
                <article>
                    <h1>State of the Art Infrastructure</h1>
                    <p>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </article>
        </section>
    )
}

export default Banner;