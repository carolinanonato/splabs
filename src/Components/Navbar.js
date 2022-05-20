import React from 'react'
import '../Styles/Navbar.scss'

function Navbar() {
    return (
        <nav>
            <h3 className='logo'>SP labs_</h3>
            <ul className="nav__links">
                <li>Cases</li>
                <li>Contato</li>
            </ul>


        </nav>
    )
}

export default Navbar