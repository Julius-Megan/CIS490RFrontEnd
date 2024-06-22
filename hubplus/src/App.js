// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/LoginForm/SignUpForm';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/signup" element={<SignUpForm/>} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;