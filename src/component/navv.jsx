import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './navbar-fix.css';

function Navb() {
    const [activeItem, setActiveItem] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(-1);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'Services', to: 'services' },
        { name: 'Calculator', to: 'calculator' },
        { name: 'Reviews', to: 'reviews' },
        { name: 'FAQs', to: 'faqs' },
        { name: 'Apply Now', to: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = useCallback((index) => {
        setHoverIndex(index);
        
        // Update liquid blob position
        const liquidBlob = document.querySelector('.liquid-blob');
        const navItem = document.querySelector(`[data-nav-index="${index}"]`);
        
        if (liquidBlob && navItem) {
            const rect = navItem.getBoundingClientRect();
            const containerRect = document.querySelector('.liquid-nav-container').getBoundingClientRect();
            
            const left = rect.left - containerRect.left;
            const width = rect.width;
            
            liquidBlob.style.transform = `translateX(${left}px)`;
            liquidBlob.style.width = `${width}px`;
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoverIndex(-1);
        
        // Return blob to active item
        const liquidBlob = document.querySelector('.liquid-blob');
        const activeNavItem = document.querySelector(`[data-nav-index="${activeItem}"]`);
        
        if (liquidBlob && activeNavItem) {
            const rect = activeNavItem.getBoundingClientRect();
            const containerRect = document.querySelector('.liquid-nav-container').getBoundingClientRect();
            
            const left = rect.left - containerRect.left;
            const width = rect.width;
            
            liquidBlob.style.transform = `translateX(${left}px)`;
            liquidBlob.style.width = `${width}px`;
        }
    }, [activeItem]);

    const handleClick = useCallback((index) => {
        setActiveItem(index);
        setHoverIndex(-1);
        
        // Animate blob to clicked item
        setTimeout(() => {
            const liquidBlob = document.querySelector('.liquid-blob');
            const navItem = document.querySelector(`[data-nav-index="${index}"]`);
            
            if (liquidBlob && navItem) {
                const rect = navItem.getBoundingClientRect();
                const containerRect = document.querySelector('.liquid-nav-container').getBoundingClientRect();
                
                const left = rect.left - containerRect.left;
                const width = rect.width;
                
                liquidBlob.style.transform = `translateX(${left}px)`;
                liquidBlob.style.width = `${width}px`;
            }
        }, 50);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);

    const closeMobileMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    // Handle admin portal click
    const handleAdminClick = () => {
        navigate('/admin');
    };

    return (
        <>
            <div className={`liquid-navbar ${scrolled ? 'scrolled' : ''}`}>
                {/* Logo Section */}
                <div className="liquid-logo-section">
                    <div className="logo-container">
                        <div className="logo-icon">💎</div>
                        <div className="logo-text">
                            <span className="brand-main">LoanBazar</span>
                            <span className="brand-tagline">Your Financial Partner</span>
                        </div>
                    </div>
                </div>

                {/* Liquid Navigation Container */}
                <div className="liquid-nav-container" onMouseLeave={handleMouseLeave}>
                    {/* Animated Liquid Blob Background */}
                    <div className="liquid-blob"></div>
                    
                    {/* Morphing Background SVG */}
                    <svg className="liquid-morph-bg" viewBox="0 0 800 60" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(244, 197, 66, 0.8)" />
                                <stop offset="50%" stopColor="rgba(244, 197, 66, 0.6)" />
                                <stop offset="100%" stopColor="rgba(244, 197, 66, 0.8)" />
                            </linearGradient>
                            <filter id="liquidGlow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        <path 
                            className="liquid-path"
                            d="M0,30 Q200,10 400,30 T800,30 L800,60 L0,60 Z"
                            fill="url(#liquidGradient)"
                            filter="url(#liquidGlow)"
                        />
                    </svg>

                    {/* Navigation Items */}
                    <ul className="liquid-nav-menu">
                        {navItems.map((item, index) => (
                            <li 
                                key={`nav-${index}`}
                                data-nav-index={index}
                                className={`liquid-nav-item ${activeItem === index ? 'active' : ''} ${hoverIndex === index ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onClick={() => handleClick(index)}
                            >
                                <Link to={item.to} smooth={true} duration={800} offset={-80}>
                                    <span className="nav-text">{item.name}</span>
                                    <div className="liquid-ripple"></div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Admin Portal Button */}
                <button onClick={handleAdminClick} className="liquid-admin-btn">
                    <span className="admin-text">Admin Portal</span>
                    <div className="liquid-admin-bg"></div>
                </button>

                {/* Mobile Toggle */}
                <button 
                    type="button"
                    className={`liquid-mobile-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                >
                    <div className="liquid-hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`liquid-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="liquid-mobile-overlay" onClick={closeMobileMenu}>
                    <svg className="liquid-mobile-bg" viewBox="0 0 400 800" preserveAspectRatio="none">
                        <path 
                            className="mobile-liquid-path"
                            d="M0,0 Q50,100 0,200 T0,400 T0,600 T0,800 L400,800 L400,0 Z"
                            fill="url(#liquidGradient)"
                        />
                    </svg>
                </div>
                
                <div className="liquid-mobile-panel">
                    <div className="mobile-logo">
                        <div className="mobile-logo-icon">💎</div>
                        <span className="mobile-brand-text">LoanBazar</span>
                    </div>
                    
                    <div className="liquid-mobile-nav">
                        {navItems.map((item, index) => (
                            <Link 
                                key={`mobile-${index}`}
                                to={item.to} 
                                smooth={true} 
                                duration={800}
                                offset={-80}
                                className="liquid-mobile-link"
                                onClick={closeMobileMenu}
                            >
                                <span className="mobile-nav-text">{item.name}</span>
                                <div className="mobile-liquid-ripple"></div>
                            </Link>
                        ))}
                        
                        <button onClick={() => { handleAdminClick(); closeMobileMenu(); }} className="liquid-mobile-link admin-link">
                            <span className="mobile-nav-text">Admin Portal</span>
                            <div className="mobile-liquid-ripple"></div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navb;