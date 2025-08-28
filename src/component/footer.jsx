// Footer.js
import React from "react";
import { Link } from "react-router-dom";
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
              <button type="button" aria-label="Facebook" className="social-link"> </button>
              <button type="button" aria-label="Twitter" className="social-link"> </button>
              <button type="button" aria-label="LinkedIn" className="social-link"> </button>
              <button type="button" aria-label="Instagram" className="social-link"> </button>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Loan Products</h4>
            <ul>
              <li><a href="javascript:void(0)">Personal Loan</a></li>
              <li><a href="javascript:void(0)">Home Loan</a></li>
              <li><a href="javascript:void(0)">Business Loan</a></li>
              <li><a href="javascript:void(0)">Professional Loan</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="javascript:void(0)">EMI Calculator</a></li>
              <li><a href="javascript:void(0)">Eligibility Checker</a></li>
              <li><a href="javascript:void(0)">FAQs</a></li>
              <li><a href="javascript:void(0)">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/cookies-policy">Cookies Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 LoanBazar. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <Link to="/disclaimer">Disclaimer</Link>
              <Link to="/cookies-policy">Cookies Policy</Link>
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
