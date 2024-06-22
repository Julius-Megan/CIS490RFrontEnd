// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

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