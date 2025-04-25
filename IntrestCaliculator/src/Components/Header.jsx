import React from 'react';
import IntrestCalsyPngImage from '../assets/IntrestCalsyPngImage.png';

// import './Header.css'; // Assuming you will create a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <img style={{ width: '150px', height: '150px' }}
                src={IntrestCalsyPngImage} 
                alt="Interest Calculator Logo" 
                // className="header-logo" 
            />
            <h1>Interest Calculator</h1>
        </header>
    );
};

export default Header;