import React, { useState } from "react";
import '../index.css'
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navb() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    };

    return (
        <header className="navbar" data-aos="fade-down">
            <div className="navbar-logo">
                <h1>
                    <span className="logo-icon">🏦</span>
                    <span className="logo-text">Loan</span>
                    <span className="logo-subtitle">Bazar</span>
                </h1>
            </div>
            <nav className="navbar-links" role="navigation" aria-label="Main navigation">
                <ul className={isMenuOpen ? 'active' : ''}>
                    <li>
                        <Link to="home" smooth={true} duration={500} onClick={closeMenu} aria-label="Go to homepage">Home</Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={500} onClick={closeMenu} aria-label="View loan services">Loan Services</Link>
                    </li>
                    <li>
                        <Link to="calculator" smooth={true} duration={500} onClick={closeMenu} aria-label="Calculate EMI">EMI Calculator</Link>
                    </li>
                    <li>
                        <Link to="testimonials" smooth={true} duration={500} onClick={closeMenu} aria-label="Customer reviews">Reviews</Link>
                    </li>
                    <li>
                        <Link to="faqs" smooth={true} duration={500} onClick={closeMenu} aria-label="Frequently asked questions">FAQs</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} onClick={closeMenu} aria-label="Contact us">Apply Now</Link>
                    </li>
                    <li className="admin-link">
                        <RouterLink to="/admin" onClick={closeMenu} aria-label="Admin panel">Admin</RouterLink>
                    </li>
                </ul>
                <div 
                    className="hamburger" 
                    onClick={toggleMenu} 
                    onKeyDown={handleKeyDown}
                    aria-label="Toggle menu" 
                    role="button" 
                    tabIndex="0"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Navb;