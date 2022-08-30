import React from 'react'
import logo from "../Assets/images/logo.svg"
import hamburger from "../Assets/images/icon-hamburger.svg"

function Nav(){
    return(
        <nav id="main-nav">
            <img className="logo" src={logo} alt="logo" />
            <img className="menu" src={hamburger} alt="menu" />
        </nav>
    )
}

export default Nav