// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

const App = () => {
    return (
        <div>
            <Navbar />
            <LandingPage/>
            <Footer/>
            {/* Other components go here */}
        </div>
    );
}

export default App;