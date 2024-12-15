import React from 'react';
import IconSvg from '../../assets/bzIcon.png'; 
import './loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <div className="svg-wrapper">
                <img src={IconSvg} alt="Loading..." className="loading-icon" />
            </div>
        </div>
    );
};

export default Loader;
