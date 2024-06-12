// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection/>
            {/* Other components go here */}
        </div>
    );
}

export default App;