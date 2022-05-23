import React from 'react'
import '../Styles/Hero.scss'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'

function Hero() {
    return (
        <>
            <div className='hero'>
                <div className="hero__wrapper">
                    <Navbar />
                    <div className="hero__text">
                        <h1>Imagine, crie, implemente e <span>evolua</span></h1>
                        <p>Porque não basta resolver apenas os conflitos do mundo do direito.</p>
                        <Button label={"inicie a sua jornada"} />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Hero