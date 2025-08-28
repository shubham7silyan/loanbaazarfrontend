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
            document.querySelector('.contact-form').scrollIntoView({ 
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
            // Send to backend API (with email functionality)
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
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
                throw new Error('Failed to submit form');
            }
            
        } catch (error) {
            console.error("Error submitting form:", error);
            alert(`⚠️ There was an error submitting your inquiry. 
            
Please try again or contact us directly:
📧 Email: loanbazar76@gmail.com
📱 Phone: +91 7678507025

We apologize for the inconvenience!`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-us">
            <div className="container" data-aos="fade-up">
                <div className="contact-header">
                    <h2>Get in Touch</h2>
                    <p>Ready to take the next step? Our loan experts are here to help you find the perfect financial solution.</p>
                </div>
                
                <div className="contact-container">
                    <div className="contact-info" data-aos="fade-right">
                        <h3>Contact Information</h3>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 7678507025</p>
                                <span>Mon-Sat: 9 AM - 9 PM</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>loanbazar76@gmail.com</p>
                                <span>24/7 Email Support</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4>Office</h4>
                                <p>A12 noida, sector-16, Uttar Pradesh, 201301</p>
                                <span>Visit us for personalized consultation</span>
                            </div>
                        </div>
                        <div className="quick-apply">
                            <h4>Quick Apply</h4>
                            <p>Need a loan urgently? Apply online in 5 minutes!</p>
                            <button className="quick-apply-btn" onClick={handleApplyClick}>Apply Now</button>
                        </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-left">
                        <h3>Send us a Message</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">How can we help you? *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell us about your loan requirements, questions, or feedback..."
                                rows="5"
                            ></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="submit-btn">
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
            
            {/* Popup Animation */}
            {showPopup && (
                <div className="apply-popup-overlay">
                    <div className="apply-popup">
                        <div className="popup-icon">🎯</div>
                        <h3>Great Choice!</h3>
                        <p>You've chosen to <strong>Apply Quickly</strong></p>
                        <p>Redirecting you to our application form...</p>
                        <div className="popup-loader"></div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactUs;
