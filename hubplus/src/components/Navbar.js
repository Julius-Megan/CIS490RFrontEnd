import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
    return (
        <header>
            <nav className='nav-container'>
                <div className='logo'>
                    <p>Add Logo Here</p>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li><a href="/">Maps</a></li>
                        <li><a href="/about">HUB</a></li>
                        <li><a href="/services">Games</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className='signup-button'>
                    <a href="/signup" className="button">Sign Up</a>
                </div>
            </nav>
        </header>


    );
}

export default Navbar;