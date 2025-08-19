// Footer.js
import React from "react";
import '../index.css'

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3> LoanBazar</h3>
            <p>India's most trusted digital lending platform. Making loans simple, fast, and transparent.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"> </a>
              <a href="#" aria-label="Twitter"> </a>
              <a href="#" aria-label="LinkedIn"> </a>
              <a href="#" aria-label="Instagram"> </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Loan Products</h4>
            <ul>
              <li><a href="#services">Personal Loan</a></li>
              <li><a href="#services">Home Loan</a></li>
              <li><a href="#services">Business Loan</a></li>
              <li><a href="#services">Professional Loan</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#calculator">EMI Calculator</a></li>
              <li><a href="#eligibility">Eligibility Checker</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p> +91 1800-123-4567</p>
              <p> support@loanbazar.com</p>
              <p> Mumbai, Maharashtra</p>
              <p> Mon-Sat: 9 AM - 8 PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 LoanBazar. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#disclaimer">Disclaimer</a>
            </div>
          </div>
          <div className="footer-certifications">
            <span> RBI Approved Partners</span>
            <span> SSL Secured</span>
            <span> ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
