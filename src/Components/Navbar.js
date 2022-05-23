import React from 'react'
import '../Styles/Navbar.scss'
import AnchorLink from "react-anchor-link-smooth-scroll";



function Navbar() {
    return (
        <nav>
            <h3 className='header'>SP labs_</h3>
            <ul className="header__links">
                <AnchorLink href="#cases"><li>Cases</li></AnchorLink>
                <AnchorLink href="#form"><li>Contato</li></AnchorLink>
            </ul>


        </nav>
    )
}

export default Navbar