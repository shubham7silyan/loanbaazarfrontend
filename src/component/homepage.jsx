import React, { useState } from "react";
import { Link } from "react-scroll";
import '../index.css'
import currencyimage from "./images/IndianCurrency.jpg"

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleApplyClick = () => {
        setShowPopup(true);
        
        // Auto-hide popup after 3 seconds and scroll to contact
        setTimeout(() => {
            setShowPopup(false);
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 3000);
    };

    return (
        <section id="home" className="homepage">
            <div className="hero-section">
                <div className="hero-content" data-aos="fade-up">
                    <h1 className="hero-title">Your Trusted Financial Partner</h1>
                    <h2 className="hero-subtitle">Secure Loans at Competitive Rates</h2>
                    <p className="hero-description">
                        Experience hassle-free loan processing with India's leading digital lending platform. 
                        Get instant approvals, competitive interest rates, and flexible repayment options 
                        tailored to your financial needs.
                    </p>
                    <div className="hero-stats" data-aos="fade-up" data-aos-delay="200">
                        <div className="stat">
                            <h3>₹50Lakhs+</h3>
                            <p>Loans Disbursed</p>
                        </div>
                        <div className="stat">
                            <h3>5,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stat">
                            <h3>24 Hours</h3>
                            <p>Quick Approval</p>
                        </div>
                    </div>
                    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
                        <button className="cta-button primary" onClick={handleApplyClick}>Apply Now</button>
                        <Link to="calculator" smooth={true} duration={500}>
                            <button className="cta-button secondary">Calculate EMI</button>
                        </Link>
                    </div>
                </div>
                <div className="hero-image" data-aos="fade-left" data-aos-delay="300">
                    <img src={currencyimage} alt="Financial Solutions" className="home-banner"/>
                </div>
            </div>
            
            {/* Popup Animation */}
            {showPopup && (
                <div className="apply-popup-overlay">
                    <div className="apply-popup">
                        <div className="popup-icon">🎯</div>
                        <h3>Great Choice!</h3>
                        <p>You've chosen to <strong>Apply for a Loan</strong></p>
                        <p>Redirecting you to our application form...</p>
                        <div className="popup-loader"></div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HomePage;
