import React from "react";
import '../index.css';
import { paisabazaarData } from '../services/paisabazaarData';

const Testimonials = () => {
    // Use real PaisaBazaar testimonials data
    const testimonials = paisabazaarData.testimonials;

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>
                ⭐
            </span>
        ));
    };

    return (
        <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
                <h2>What Our Customers Say</h2>
                <p className="testimonials-subtitle">Join thousands of satisfied customers who trust LoanBazar for their financial needs</p>
                
                {/* Success Stats */}
                <div className="success-stats" data-aos="fade-up">
                    <div className="stat-item">
                        <h3>₹500+ Crores</h3>
                        <p>Loans Disbursed</p>
                    </div>
                    <div className="stat-item">
                        <h3>50,000+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat-item">
                        <h3>4.8/5</h3>
                        <p>Customer Rating</p>
                    </div>
                    <div className="stat-item">
                        <h3>24 Hours</h3>
                        <p>Average Approval</p>
                    </div>
                </div>
                
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={testimonial.id} 
                            className="testimonial-card"
                            data-aos="flip-left"
                            data-aos-delay={index * 150}
                        >
                            <div className="testimonial-content">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-text">{testimonial.review}</p>
                                <div className="rating">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <div className="loan-info">
                                    <span className="loan-type">{testimonial.loanType}</span>
                                    <span className="loan-amount">{testimonial.amount}</span>
                                </div>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.designation}</p>
                                    <span className="location">📍 {testimonial.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators" data-aos="fade-up">
                    <h3>Trusted by Leading Banks & NBFCs</h3>
                    <div className="partners-grid">
                        {paisabazaarData.bankPartners.slice(0, 6).map((partner, index) => (
                            <div key={index} className="partner-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                                <div className="partner-logo">
                                    <span>{partner.name.split(' ').map(word => word[0]).join('')}</span>
                                </div>
                                <p>{partner.name}</p>
                                <small>{partner.products.join(', ')}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
