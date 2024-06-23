import React from 'react';
import './Navbar.css'; // Import CSS for styling
import { FaUserCircle } from 'react-icons/fa';

const Navbar = ({isLoggedIn, handleLogout}) => {
    return (
        <header>
            <nav className='nav-container'>
                <div className='logo'>
                    <a href='/'>
                        <img src="hub+.png" alt='Logo'/>
                    </a>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li><a href="/">Maps</a></li>
                        <li><a href="/about">HUB</a></li>
                        <li><a href="/services">Games</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="auth-section">
                    {isLoggedIn ? (
                        <div>
                            <FaUserCircle size={30} onClick={handleLogout} title="Logout" style={{ cursor: 'pointer' }} />
                            <span className='logout-text' >Logout</span>
                        </div>
                    ):(
                        <div className='signup-button'>
                            <a href="/signup" className="button">Sign Up</a>
                        </div>
                    )}
                </div>

            </nav>
        </header>


    );
}

export default Navbar;