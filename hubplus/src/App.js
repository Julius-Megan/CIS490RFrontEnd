// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection/>
            <Footer/>
            {/* Other components go here */}
        </div>
    );
}

export default App;