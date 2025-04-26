import React from 'react';
import IntrestCalsyPngImage from '../assets/IntrestCalsyPngImage.png';
import './project.css';
// import './Header.css'; // Assuming you will create a CSS file for styling

const Header = () => {
    return (
        <>
            <img
                src={IntrestCalsyPngImage} 
                alt="Interest Calculator Logo" 
                // className="header-logo" 
            />
            <h1>Interest Calculator</h1>
        </>
    );
};

export default Header;