import React from 'react'
import '../Styles/Button.scss'

const Button = ({ label, handleClick }) => (
    <button
        className="btn"
        onClick={handleClick}
    >
        {label}
    </button>
);


export default Button