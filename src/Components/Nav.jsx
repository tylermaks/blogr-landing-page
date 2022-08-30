import React from 'react'
import logo from "../Assets/images/logo.svg"
import hamburger from "../Assets/images/icon-hamburger.svg"
import arrow from "../Assets/images/icon-arrow-light.svg"

import "../Assets/Styles/Nav/Nav.css"

function Nav(){

    const links = ["Product", "Company", "Connect"]

    return(
        <nav id="main-nav">
            <div className="inner-nav">
                <img className="logo" src={logo} alt="logo" />

                {
                    links.map(item => {
                        return(
                            <div className="inner-nav inner-nav--links desktop">
                                <span>{item}</span>
                                <img className="arrow" src={arrow} alt="arrow" />
                            </div>
                        )
                    })
                }
            </div>
            <div className='inner-nav'>
                <img className="menu mobile" src={hamburger} alt="menu" />
                <span className="desktop">Login</span>
                <button className="main-btn desktop">Sign Up</button>
            </div>
        </nav>
    )
}

export default Nav