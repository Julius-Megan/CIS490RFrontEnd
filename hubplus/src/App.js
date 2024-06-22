// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/LoginForm/SignUpForm';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/signup" element={<SignUpForm/>} />
                </Routes>

            </div>
        </Router>
    );
}

export default App;