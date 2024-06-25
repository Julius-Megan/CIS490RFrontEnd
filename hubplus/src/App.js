// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/LoginForm/SignUpForm';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Games from './pages/Games';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token =localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (token, id) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div>
                <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm onLogin={handleLogin}/>} />
                    <Route path="/signup" element={<SignUpForm/>} />
                    <Route path="/profile/:id" element={<Profile/>} />
                    <Route path="/games" element={<Games/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;