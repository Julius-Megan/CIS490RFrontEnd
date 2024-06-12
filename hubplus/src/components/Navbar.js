import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="nav-links">
                    <li><a href="/">Maps</a></li>
                    <li><a href="/about">HUB</a></li>
                    <li><a href="/services">Games</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;