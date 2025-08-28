// Services.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import "../index.css"
import { paisabazaarData, getLowestRate } from '../services/paisabazaarData';
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

    // Enhanced services data with loansjagat.com data
    const servicesData = [
        {
            id: 1,
            title: "Personal Loan",
            description: "Unsecured personal loans for all your financial needs - medical emergencies, education, travel, or any personal requirement.",
            image: personalLoanImg,
            rate: "10.99% onwards",
            maxAmount: "₹25 Lakh",
            tenure: "12-84 months",
            processingTime: "24 hours",
            interestRate: "10.99% onwards",
            features: [
                "100% Paperless Process",
                "No Collateral Required", 
                "Instant Approval",
                "Flexible Tenure Options",
                "Balance Transfer Available"
            ],
            banks: [
                { name: "HDFC Bank" },
                { name: "ICICI Bank" },
                { name: "SBI" },
                { name: "Axis Bank" },
                { name: "Kotak Mahindra" }
            ]
        },
        {
            id: 2,
            title: "Business Loan",
            description: "Fuel your business growth with customized business loans for self-employed, retailers, hotels, women entrepreneurs, and doctors.",
            image: businessLoanImg,
            rate: "12.50% onwards",
            maxAmount: "₹50 Lakh",
            tenure: "12-60 months",
            processingTime: "48 hours",
            interestRate: "12.50% onwards",
            features: [
                "Quick Business Expansion",
                "Working Capital Support",
                "Equipment Financing",
                "Minimal Documentation",
                "Flexible Repayment"
            ],
            banks: [
                { name: "HDFC Bank" },
                { name: "ICICI Bank" },
                { name: "Yes Bank" },
                { name: "IndusInd Bank" },
                { name: "IDFC First" }
            ]
        },
        {
            id: 3,
            title: "Home Loan",
            description: "Realize your dream of owning a home with our competitive home loan rates and flexible repayment options.",
            image: housingLoanImg,
            rate: "8.50% onwards",
            maxAmount: "₹5 Crore",
            tenure: "5-30 years",
            processingTime: "7-10 days",
            interestRate: "8.50% onwards",
            features: [
                "Up to 90% Financing",
                "Tax Benefits Available",
                "Balance Transfer Options",
                "Part Prepayment Facility",
                "Doorstep Service"
            ],
            banks: [
                { name: "SBI" },
                { name: "HDFC Ltd" },
                { name: "ICICI Bank" },
                { name: "LIC Housing" },
                { name: "PNB Housing" }
            ]
        },
        {
            id: 4,
            title: "Debt Consolidation Loan",
            description: "Consolidate all your debts into a single EMI. Manage multiple credit card bills and loans with ease and save on interest.",
            image: doctorLoanImg,
            rate: "11.99% onwards",
            maxAmount: "₹50 Lakh",
            tenure: "12-84 months",
            processingTime: "24-48 hours",
            interestRate: "11.99% onwards",
            features: [
                "Single EMI for All Debts",
                "Lower Interest Rates",
                "Improved Credit Score",
                "Reduced Financial Stress",
                "Credit Card Consolidation"
            ],
            banks: [
                { name: "HDFC Bank" },
                { name: "ICICI Bank" },
                { name: "Axis Bank" },
                { name: "Standard Chartered" },
                { name: "Citibank" }
            ]
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">
                <h2>Best Personal Loans, Home Loans & Business Loans Online</h2>
                <p className="services-subtitle">Compare and apply for instant loans from 40+ banks & NBFCs with 100% paperless process</p>
                
                {/* Enhanced Statistics Banner */}
                <div className="stats-banner" data-aos="fade-up">
                    <div className="stat-item">
                        <h3>1M+</h3>
                        <p>Loan Customers Served</p>
                    </div>
                    <div className="stat-item">
                        <h3>₹2000 Cr+</h3>
                        <p>Loans Disbursed</p>
                    </div>
                    <div className="stat-item">
                        <h3>40+</h3>
                        <p>Bank Partners</p>
                    </div>
                    <div className="stat-item">
                        <h3>100+</h3>
                        <p>Cities Covered</p>
                    </div>
                </div>

                {/* Interest Rate Comparison Banner */}
                <div className="rate-comparison-banner" data-aos="fade-up">
                    <h3>🏆 Compare Best Loan Interest Rates in India</h3>
                    <div className="rate-grid">
                        <div className="rate-item">
                            <span>Personal Loan</span>
                            <strong>10.99% onwards</strong>
                        </div>
                        <div className="rate-item">
                            <span>Home Loan</span>
                            <strong>8.50% onwards</strong>
                        </div>
                        <div className="rate-item">
                            <span>Business Loan</span>
                            <strong>12.50% onwards</strong>
                        </div>
                        <div className="rate-item">
                            <span>Debt Consolidation</span>
                            <strong>11.99% onwards</strong>
                        </div>
                    </div>
                </div>

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
                                    alt={`${service.title.toLowerCase()} online application instant approval india`}
                                    className="service-image"
                                />
                                <div className="service-rate">{service.rate}</div>
                                <div className="service-amount">Up to {service.maxAmount}</div>
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                
                                {/* Loan Details */}
                                <div className="loan-details">
                                    <div className="detail-row">
                                        <span>💰 Amount:</span>
                                        <strong>{service.maxAmount}</strong>
                                    </div>
                                    <div className="detail-row">
                                        <span>⏱️ Tenure:</span>
                                        <strong>{service.tenure}</strong>
                                    </div>
                                    <div className="detail-row">
                                        <span>🚀 Processing:</span>
                                        <strong>{service.processingTime}</strong>
                                    </div>
                                </div>

                                <ul className="service-features">
                                    {service.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ))}
                                </ul>

                                {/* Bank Partners */}
                                <div className="bank-partners">
                                    <span className="partners-label">Available from:</span>
                                    <div className="bank-list">
                                        {service.banks.slice(0, 3).map((bank, idx) => (
                                            <span key={idx} className="bank-name">{bank.name}</span>
                                        ))}
                                        {service.banks.length > 3 && <span className="more-banks">+{service.banks.length - 3} more</span>}
                                    </div>
                                </div>
                                
                                <button 
                                    className="inquire-btn"
                                    onClick={() => handleApplyClick(service.title)}
                                >
                                    Apply Now - {service.interestRate}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Platform Features */}
                <div className="platform-features" data-aos="fade-up">
                    <h3>Why Choose LoanBazar for Online Loan Application?</h3>
                    <div className="features-grid">
                        {paisabazaarData.platformFeatures.map((feature, index) => (
                            <div key={index} className="feature-item" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
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
