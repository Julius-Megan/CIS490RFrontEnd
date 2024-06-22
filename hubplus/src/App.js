// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LoginForm from './components/LoginForm/LoginForm';

const App = () => {
    return (
        <div>
            <LoginForm/>
            {/* 
            
            <Navbar />
            <HeroSection/>
            
            <Footer/>
            
            Other components go here */}
        </div>
    );
}

export default App;