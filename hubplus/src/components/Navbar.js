import React, {useState} from 'react';
import './Navbar.css'; // Import CSS for styling
import { FaUserCircle } from 'react-icons/fa';

const Navbar = ({isLoggedIn, handleLogout }) => {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogoutClick = () => {
        handleLogout();
        setDropdownVisible(false);
    };

    return (
        <header>
            <nav className='nav-container'>
                <div className='logo'>
                    <a href='/'>
                        <img src="/hub+.png" alt='Logo'/>
                    </a>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/games">Games</a></li>
                        <li><a href="https://hookahua.byuh.edu/the-hub">TheHub</a></li>
                    </ul>
                </div>
                <div className="auth-section">
                    {isLoggedIn ? (
                        <div className='profile-container'>
                            <FaUserCircle size={30} onClick={toggleDropdown} style={{ cursor: 'pointer' }} />
                            {dropdownVisible && (
                                <div className='dropdown-menu'>
                                    <a href='/profile/:id'>Profile</a>
                                    <a href='/' onClick={handleLogoutClick}>Logout</a>
                                </div>
                            )}
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