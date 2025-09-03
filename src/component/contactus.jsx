// ContactUs.js
import React, { useState } from "react";
import "../index.css";
import API_BASE_URL from "../config/api";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleApplyClick = () => {
        setShowPopup(true);
        
        // Auto-hide popup after 3 seconds and scroll to contact form
        setTimeout(() => {
            setShowPopup(false);
            document.querySelector('.modern-contact-form').scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }, 3000);
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        try {
            console.log('Submitting to:', `${API_BASE_URL}/api/contact`);
            console.log('Form data:', formData);
            
            // Send to backend API (with email functionality)
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData),
                mode: 'cors',
                credentials: 'include'
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (response.ok) {
                const result = await response.json();
                console.log('Success response:', result);
                
                // Success message
                alert(`✅ Inquiry submitted successfully!
                
📧 A confirmation email has been sent to your email address.
📧 Our team has been notified and will respond within 24 hours.

Thank you for choosing LoanBazar!`);
                
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                const errorData = await response.text();
                console.error('Server error response:', errorData);
                throw new Error(`Server responded with status: ${response.status}`);
            }
            
        } catch (error) {
            console.error('Contact form submission error:', error);
            
            let errorMessage = `⚠️ There was an error submitting your inquiry.`;
            
            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                errorMessage += `\n\n🌐 Network Error: Unable to connect to our servers.`;
            } else if (error.message.includes('CORS')) {
                errorMessage += `\n\n🔒 CORS Error: Cross-origin request blocked.`;
            } else {
                errorMessage += `\n\n📋 Error Details: ${error.message}`;
            }
            
            errorMessage += `
            
Please try again or contact us directly:
📧 Email: loanbazar76@gmail.com
📱 Phone: +91 7678507025

We apologize for the inconvenience!`;
            
            alert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="modern-contact-section">
            <div className="container" data-aos="fade-up">
                {/* Hero Header */}
                <div className="contact-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="gradient-text">Let's Connect</span>
                        </h1>
                        <p className="hero-subtitle">
                            Transform your financial dreams into reality. Our expert team is ready to guide you every step of the way.
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Support</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">1M+</div>
                                <div className="stat-label">Happy Customers</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">₹2000Cr+</div>
                                <div className="stat-label">Loans Disbursed</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Contact Content */}
                <div className="contact-grid">
                    {/* Contact Information Cards */}
                    <div className="contact-info-grid" data-aos="fade-right">
                        <div className="info-card phone-card">
                            <div className="card-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="card-content">
                                <h3>Call Us Now</h3>
                                <p className="primary-info">+91 7678507025</p>
                                <span className="secondary-info">Mon-Sat: 9 AM - 9 PM</span>
                                <div className="card-action">
                                    <a href="tel:+917678507025" className="action-btn">
                                        <i className="fas fa-phone"></i> Call Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="info-card email-card">
                            <div className="card-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="card-content">
                                <h3>Email Support</h3>
                                <p className="primary-info">loanbazar76@gmail.com</p>
                                <span className="secondary-info">24/7 Email Support</span>
                                <div className="card-action">
                                    <a href="mailto:loanbazar76@gmail.com" className="action-btn">
                                        <i className="fas fa-envelope"></i> Send Email
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="info-card location-card">
                            <div className="card-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="card-content">
                                <h3>Visit Our Office</h3>
                                <p className="primary-info">A12 Noida, Sector-16</p>
                                <span className="secondary-info">Uttar Pradesh, 201301</span>
                                <div className="card-action">
                                    <button className="action-btn" onClick={handleApplyClick}>
                                        <i className="fas fa-rocket"></i> Quick Apply
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Apply CTA */}
                        <div className="quick-apply-card">
                            <div className="apply-content">
                                <div className="apply-icon">🚀</div>
                                <h3>Need a Loan Urgently?</h3>
                                <p>Get instant approval in just 5 minutes!</p>
                                <button className="quick-apply-btn" onClick={handleApplyClick}>
                                    Apply Now - Get ₹25 Lakh
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Modern Contact Form */}
                    <div className="modern-contact-form" data-aos="fade-left">
                        <div className="form-header">
                            <h2>Send us a Message</h2>
                            <p>Fill out the form below and we'll get back to you within 24 hours</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form-modern">
                            <div className="form-grid">
                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <i className="fas fa-user input-icon"></i>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Full Name"
                                            className="modern-input"
                                        />
                                        <label htmlFor="name" className="floating-label">Full Name *</label>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <div className="input-wrapper">
                                        <i className="fas fa-phone input-icon"></i>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="Phone Number"
                                            className="modern-input"
                                        />
                                        <label htmlFor="phone" className="floating-label">Phone Number *</label>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="input-wrapper">
                                    <i className="fas fa-envelope input-icon"></i>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Email Address"
                                        className="modern-input"
                                    />
                                    <label htmlFor="email" className="floating-label">Email Address *</label>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="input-wrapper">
                                    <i className="fas fa-comment-dots input-icon"></i>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us about your loan requirements..."
                                        rows="5"
                                        className="modern-textarea"
                                    ></textarea>
                                    <label htmlFor="message" className="floating-label">How can we help you? *</label>
                                </div>
                            </div>

                            <button type="submit" disabled={isSubmitting} className="modern-submit-btn">
                                <span className="btn-content">
                                    {isSubmitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane"></i>
                                            Send Message
                                        </>
                                    )}
                                </span>
                            </button>

                            {/* Trust Indicators */}
                            <div className="form-trust">
                                <div className="trust-item">
                                    <i className="fas fa-shield-alt"></i>
                                    <span>100% Secure</span>
                                </div>
                                <div className="trust-item">
                                    <i className="fas fa-clock"></i>
                                    <span>24hr Response</span>
                                </div>
                                <div className="trust-item">
                                    <i className="fas fa-user-shield"></i>
                                    <span>Privacy Protected</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Enhanced Popup Animation */}
            {showPopup && (
                <div className="modern-popup-overlay">
                    <div className="modern-popup">
                        <div className="popup-header">
                            <div className="popup-icon">🎯</div>
                            <h3>Excellent Choice!</h3>
                        </div>
                        <div className="popup-content">
                            <p>You've chosen to <strong>Apply Quickly</strong></p>
                            <p>Redirecting you to our secure application form...</p>
                            <div className="popup-progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactUs;
