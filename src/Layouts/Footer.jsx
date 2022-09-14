import React from "react"

import logo from "../Assets/images/logo.svg"

import "../Assets/Styles/Footer/Footer.css"

const links = [
    ["Product", "Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    ["Company", "About", "Team", "Blog", "Careers"],
    ["Connect", "Contact", "Newsletter", "LinkedIn"]
]

function Footer(){
    return(
        <footer>
            <div className="footer-inner">
                <img className="logo" src={logo} alt="logo" />

                {
                    links.map(item => {
                        return(
                            <div className="link-list">
                                {
                                    item.map(i => {
                                        return(
                                            <p className="link">{i}</p>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </footer>
    )
}

export default Footer;