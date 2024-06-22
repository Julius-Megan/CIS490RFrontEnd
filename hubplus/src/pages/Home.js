import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Footer />
        </div>
    );
};

export default Home;