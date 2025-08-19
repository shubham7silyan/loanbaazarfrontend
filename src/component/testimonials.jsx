import React from "react";
import '../index.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rajesh Kumar",
            designation: "Business Owner",
            review: "LoanBazar helped me expand my textile business with a quick business loan. The process was transparent and hassle-free.",
            rating: 5,
            location: "Mumbai"
        },
        {
            id: 2,
            name: "Priya Sharma",
            designation: "Software Engineer",
            review: "Got my home loan approved in just 24 hours! Excellent customer service and competitive interest rates.",
            rating: 5,
            location: "Bangalore"
        },
        {
            id: 3,
            name: "Dr. Amit Patel",
            designation: "Medical Practitioner",
            review: "The professional loan helped me set up my clinic. Very understanding team and flexible repayment options.",
            rating: 5,
            location: "Pune"
        }
    ];

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
                <p className="testimonials-subtitle">Join thousands of satisfied customers who trust LoanBazar</p>
                
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
            </div>
        </section>
    );
};

export default Testimonials;
