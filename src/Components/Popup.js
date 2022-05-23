import React from "react";
import '../Styles/Popup.scss'

const Popup = props => {
    return (
        <div className="popup">
            <div className="popup__box">
                <span className="popup__close-icon" onClick={props.handleClose}><span className="material-symbols-outlined">
                    close
                </span></span>
                {props.content}
            </div>
        </div>
    );
};

export default Popup;