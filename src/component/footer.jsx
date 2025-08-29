// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

const Footer = () => {
  // Handle navigation for internal sections
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle social media links
  const handleSocialClick = (platform) => {
    const socialLinks = {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: ''
    };
    
    if (socialLinks[platform]) {
      window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3> LoanBazar</h3>
            <p>India's most trusted digital lending platform. Making loans simple, fast, and transparent.</p>
            <div className="social-links">
              <button 
                type="button" 
                aria-label="Facebook" 
                className="social-link"
                onClick={() => handleSocialClick('facebook')}
              > </button>
              <button 
                type="button" 
                aria-label="Twitter" 
                className="social-link"
                onClick={() => handleSocialClick('twitter')}
              > </button>
              <button 
                type="button" 
                aria-label="LinkedIn" 
                className="social-link"
                onClick={() => handleSocialClick('linkedin')}
              > </button>
              <button 
                type="button" 
                aria-label="Instagram" 
                className="social-link"
                onClick={() => handleSocialClick('instagram')}
              > </button>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Loan Products</h4>
            <ul>
              <li><button type="button" className="footer-link-btn" onClick={() => handleNavigation('services')}>Personal Loan</button></li>
              <li><button type="button" className="footer-link-btn" onClick={() => handleNavigation('services')}>Home Loan</button></li>
              <li><button type="button" className="footer-link-btn" onClick={() => handleNavigation('services')}>Business Loan</button></li>
              <li><button type="button" className="footer-link-btn" onClick={() => handleNavigation('services')}>Professional Loan</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button type="button" className="footer-link-btn" onClick={() => handleNavigation('loan-calculator')}>EMI Calculator</button></li>
              <li><button type="button" className="footer-link-btn" onClick={() => handleNavigation('eligibility')}>Eligibility Checker</button></li>
              <li><button type="button" className="footer-link-btn" onClick={() => handleNavigation('faqs')}>FAQs</button></li>
              <li><button type="button" className="footer-link-btn" onClick={() => handleNavigation('contact')}>Contact Us</button></li>
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
            <span>RBI Approved Partners</span>
            <span>SSL Secured</span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
