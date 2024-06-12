// HeroSection.js
import React from 'react';
import './LandingPage.css'; // Import CSS for styling

const LandingPage = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Our Website</h1>
                <p className="hero-subtitle">We provide the best services to help you succeed.</p>
                <a href="#services" className="hero-button">Enter HUB</a>
            </div>
        </section>
    );
}

export default LandingPage;
