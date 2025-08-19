// Services.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import "../index.css"
import personalLoanImg from './images/Ploan.jpg'
import businessLoanImg from './images/Bloan.jpg'
import housingLoanImg from './images/Hloan.jpg'
import doctorLoanImg from './images/Dloan.jpg'

const Services = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedLoan, setSelectedLoan] = useState('');

    const handleApplyClick = (loanType) => {
        setSelectedLoan(loanType);
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

    const servicesData = [
        {
            id: 1,
            title: "Personal Loan",
            description: "Quick personal loans up to ₹25 lakhs with minimal documentation. Competitive rates starting from 10.99% p.a.",
            image: personalLoanImg,
            features: ["Instant approval", "Flexible tenure", "No collateral"],
            rate: "10.99% p.a. onwards"
        },
        {
            id: 2,
            title: "Business Loan",
            description: "Fuel your business growth with loans up to ₹75 lakhs. Working capital and expansion financing available.",
            image: businessLoanImg,
            features: ["Quick disbursal", "Flexible repayment", "Minimal paperwork"],
            rate: "12.50% p.a. onwards"
        },
        {
            id: 3,
            title: "Home Loan",
            description: "Make your dream home a reality with home loans up to ₹10 crores at attractive interest rates.",
            image: housingLoanImg,
            features: ["Up to 90% funding", "Long tenure", "Tax benefits"],
            rate: "8.75% p.a. onwards"
        },
        {
            id: 4,
            title: "Professional Loan",
            description: "Specialized loans for doctors, CAs, and other professionals to grow their practice.",
            image: doctorLoanImg,
            features: ["High loan amount", "Flexible terms", "Quick processing"],
            rate: "11.25% p.a. onwards"
        },
    ];

    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">
                <h2>Our Loan Services</h2>
                <p className="services-subtitle">Choose from our comprehensive range of financial products</p>
                <div className="services-cards">
                    {servicesData.map((service, index) => (
                        <div 
                            key={service.id} 
                            className="service-card"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-image-container">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-image"
                                />
                                <div className="service-rate">{service.rate}</div>
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ))}
                                </ul>
                                <button 
                                    className="inquire-btn"
                                    onClick={() => handleApplyClick(service.title)}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Popup Animation */}
            {showPopup && (
                <div className="apply-popup-overlay">
                    <div className="apply-popup">
                        <div className="popup-icon">🎯</div>
                        <h3>Great Choice!</h3>
                        <p>You've selected <strong>{selectedLoan}</strong></p>
                        <p>Redirecting you to our application form...</p>
                        <div className="popup-loader"></div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;
