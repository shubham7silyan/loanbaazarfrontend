import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import '../index.css'

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    const handleMouseMove = useCallback((e) => {
        setMousePosition({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100
        });
    }, []);

    useEffect(() => {
        setIsLoaded(true);

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    const handleApplyClick = useCallback(() => {
        setShowPopup(true);
        
        // Auto-hide popup after 3 seconds and scroll to contact
        setTimeout(() => {
            setShowPopup(false);
            const contactElement = document.getElementById('contact');
            if (contactElement) {
                contactElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 3000);
    }, []);

    return (
        <section id="home" className="homepage-new">
            {/* Animated Background Elements */}
            <div className="bg-animation">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                </div>
                <div className="gradient-orbs">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                </div>
                <div className="particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={`particle-${i}`} className={`particle particle-${i + 1}`}></div>
                    ))}
                </div>
            </div>

            {/* Interactive Mouse Follower */}
            <div 
                className="mouse-follower"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
            ></div>

            <div className="hero-container">
                <div className="hero-grid">
                    {/* Left Content */}
                    <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
                        <div className="content-wrapper">
                            <div className="badge-container">
                                <div className="trust-badge">
                                    <span className="badge-icon">🏆</span>
                                    <span>India&apos;s New Loan Platform</span>
                                </div>
                            </div>

                            <h1 className="hero-title">
                                <span className="title-line title-line-1">Get Instant</span>
                                <span className="title-line title-line-2">
                                    <span className="gradient-text">Personal Loans</span>
                                </span>
                                <span className="title-line title-line-3">& Business Loans</span>
                                <span className="title-line title-line-4">Online</span>
                            </h1>

                            <h2 className="hero-subtitle">
                                <span className="subtitle-highlight">Compare Best Loan Rates</span> from 
                                <span className="rotating-text">
                                    <span>Top Banks</span>
                                    <span>NBFCs</span>
                                    <span>Fintech</span>
                                </span>
                            </h2>

                            <p className="hero-description">
                                Experience hassle-free loan processing with India&apos;s leading digital lending platform. 
                                Get instant loan approvals, competitive interest rates, and flexible repayment options 
                                tailored to your financial needs.
                            </p>

                            {/* Enhanced Stats */}
                            <div className="hero-stats-new">
                                <div className="stat-card">
                                    <div className="stat-icon">💰</div>
                                    <div className="stat-content">
                                        <h3 className="stat-number" data-count="500">₹500+</h3>
                                        <p className="stat-label">Crores Disbursed</p>
                                    </div>
                                    <div className="stat-glow"></div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon">👥</div>
                                    <div className="stat-content">
                                        <h3 className="stat-number" data-count="50000">50,000+</h3>
                                        <p className="stat-label">Happy Customers</p>
                                    </div>
                                    <div className="stat-glow"></div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon">⚡</div>
                                    <div className="stat-content">
                                        <h3 className="stat-number" data-count="24">24 Hours</h3>
                                        <p className="stat-label">Quick Approval</p>
                                    </div>
                                    <div className="stat-glow"></div>
                                </div>
                            </div>

                            {/* Enhanced Buttons */}
                            <div className="hero-buttons-new">
                                <button 
                                    className="cta-button-new primary" 
                                    onClick={handleApplyClick}
                                    type="button"
                                >
                                    <span className="btn-content">
                                        <span className="btn-icon">🚀</span>
                                        <span className="btn-text">Apply Now</span>
                                    </span>
                                    <div className="btn-ripple"></div>
                                    <div className="btn-glow"></div>
                                </button>
                                <Link to="calculator" smooth={true} duration={500}>
                                    <button className="cta-button-new secondary" type="button">
                                        <span className="btn-content">
                                            <span className="btn-icon">🧮</span>
                                            <span className="btn-text">Calculate EMI</span>
                                        </span>
                                        <div className="btn-ripple"></div>
                                    </button>
                                </Link>
                            </div>

                            {/* Trust Indicators */}
                            <div className="trust-indicators-one">
                                <div className="trust-item-one">
                                    <span className="trust-icon-one">🔒</span>
                                    <span>100% Secure</span>
                                </div>
                                <div className="trust-item-one">
                                    <span className="trust-icon-one">⚡</span>
                                    <span>Instant Approval</span>
                                </div>
                                <div className="trust-item-one">
                                    <span className="trust-icon-one">📱</span>
                                    <span>Digital Process</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced Popup */}
            {showPopup && (
                <div className="apply-popup-overlay-new">
                    <div className="apply-popup-new">
                        <div className="popup-background">
                            <div className="popup-particles">
                                {[...Array(10)].map((_, i) => (
                                    <div key={`popup-particle-${i}`} className={`popup-particle popup-particle-${i + 1}`}></div>
                                ))}
                            </div>
                        </div>
                        <div className="popup-content">
                            <div className="popup-icon-new">
                                <div className="icon-circle">
                                    <span>🎯</span>
                                </div>
                            </div>
                            <h3 className="popup-title">Excellent Choice!</h3>
                            <p className="popup-message">
                                You&apos;ve chosen to <strong>Apply for a Loan</strong>
                            </p>
                            <p className="popup-submessage">Redirecting you to our secure application form...</p>
                            <div className="popup-loader-new">
                                <div className="loader-bar"></div>
                                <div className="loader-progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HomePage;
