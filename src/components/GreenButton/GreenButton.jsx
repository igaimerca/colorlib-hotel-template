import React from 'react';
import "./GreenButton.styles.scss";
    
function GreenButton({text}) {
    return (
        <button className="btn-container">
                {text}
        </button>
    )
}

export default GreenButton
