import React from "react";
import '../index.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container" data-aos="fade-up">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2>About LoanBazar</h2>
            <p className="about-intro">
              India's leading digital lending platform, transforming the way you access financial services.
            </p>
            <p>
              Since our inception, <strong>LoanBazar</strong> has disbursed over ₹50 Lakhs in loans, 
              helping over 5,000 customers achieve their financial goals. We leverage cutting-edge 
              technology and data analytics to provide instant loan approvals with minimal documentation.
            </p>
            <p>
              Our RBI-approved lending partners ensure complete security and transparency in all 
              transactions. With our AI-powered risk assessment, we offer personalized loan products 
              at competitive interest rates.
            </p>
            
            <div className="about-features">
              <div className="feature-item" data-aos="zoom-in" data-aos-delay="100">
                <div className="feature-icon">🏆</div>
                <h4>Award Winning</h4>
                <p>Best Digital Lending Platform 2023</p>
              </div>
              <div className="feature-item" data-aos="zoom-in" data-aos-delay="200">
                <div className="feature-icon">🔒</div>
                <h4>100% Secure</h4>
                <p>Bank-grade security & encryption</p>
              </div>
              <div className="feature-item" data-aos="zoom-in" data-aos-delay="300">
                <div className="feature-icon">⚡</div>
                <h4>Instant Approval</h4>
                <p>Get approved in under 24 hours</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats" data-aos="fade-left">
            <h3>Our Impact</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>₹50Lakhs+</h3>
                <p>Total Loans Disbursed</p>
              </div>
              <div className="stat-card">
                <h3>5,000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-card">
                <h3>99.2%</h3>
                <p>Customer Satisfaction</p>
              </div>
              <div className="stat-card">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
