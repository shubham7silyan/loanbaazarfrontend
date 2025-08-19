import React, { useState } from "react";
import '../index.css'
import { Link } from "react-scroll";

function Navb() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar" data-aos="fade-down">
            <div className="navbar-logo">
                <h1>💰 LoanBazar</h1>
            </div>
            <nav className="navbar-links">
                <ul className={isMenuOpen ? 'active' : ''}>
                    <li>
                        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={500} onClick={closeMenu}>Services</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Navb;