import React from 'react';
import '../index.css';

const CookiesPolicy = () => {
  return (
    <section className="legal-page">
      <div className="container" data-aos="fade-up">
        <div className="legal-header">
          <h1>Cookies Policy</h1>
          <p className="legal-subtitle">Learn how LoanBazar uses cookies to enhance your browsing experience</p>
        </div>

        <div className="legal-content">
          <div className="legal-section">
            <h2>Overview of Cookies</h2>
            <p>Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit websites. The LoanBazar website uses cookies to enhance the user experience by allowing the website to remember your actions and preferences over time. This document outlines the types of cookies we use, their purpose, and how you can manage your cookie preferences.</p>
          </div>

          <div className="legal-section">
            <h2>Why Do We Use Cookies?</h2>
            <p>LoanBazar utilizes cookies for various purposes:</p>
            <ul>
              <li><strong>Enhancing Website Performance:</strong> Cookies help us understand how users interact with our website, enabling us to optimize content and create a more seamless browsing experience.</li>
              <li><strong>Functional Cookies:</strong> These are essential for the running of the website's features and functionalities, such as logging in and accessing secure areas.</li>
              <li><strong>Personalization:</strong> Cookies help our website remember information that changes the way the site behaves or looks, such as your preferred language or the region you are in.</li>
              <li><strong>Analytics and Metrics:</strong> We employ cookies to collect data that helps us measure the effectiveness of our content and understand how visitors use the website.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Types of Cookies We Use</h2>
            <div className="cookie-types">
              <div className="cookie-type">
                <h3>Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
              </div>
              <div className="cookie-type">
                <h3>Performance Cookies</h3>
                <p>These cookies collect information about how visitors use our website, such as which pages are visited most often and if they get error messages from web pages.</p>
              </div>
              <div className="cookie-type">
                <h3>Functionality Cookies</h3>
                <p>These cookies allow the website to remember choices you make and provide enhanced, more personal features.</p>
              </div>
              <div className="cookie-type">
                <h3>Targeting Cookies</h3>
                <p>These cookies are used to deliver advertisements more relevant to you and your interests.</p>
              </div>
            </div>
          </div>

          <div className="legal-section">
            <h2>Third-Party Cookies</h2>
            <p>LoanBazar may use third-party services that place cookies on your device. These may include:</p>
            <ul>
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing functionality</li>
              <li>Partner banks and financial institutions for loan processing</li>
              <li>Advertising networks for targeted marketing</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Managing Cookies</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.</p>
            
            <div className="browser-instructions">
              <h3>How to Manage Cookies in Different Browsers:</h3>
              <ul>
                <li><strong>Chrome:</strong> Settings {'>'}  Privacy and Security {'>'}  Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options {'>'}  Privacy & Security {'>'}  Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences {'>'}  Privacy {'>'}  Cookies and website data</li>
                <li><strong>Edge:</strong> Settings {'>'}  Cookies and site permissions</li>
              </ul>
            </div>
          </div>

          <div className="legal-section">
            <h2>Cookie Consent</h2>
            <p>By continuing to use the LoanBazar website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.</p>
          </div>

          <div className="legal-section">
            <h2>Changes to the Cookie Policy</h2>
            <p>LoanBazar may update this Cookies Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookies Policy regularly to stay informed about our use of cookies and related technologies.</p>
          </div>

          <div className="legal-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about our use of cookies or other technologies, please contact us:</p>
            <div className="contact-details">
              <p><strong>Email:</strong> loanbazar76@gmail.com</p>
              <p><strong>Phone:</strong> +91 7678507025</p>
              <p><strong>Address:</strong> A12 Noida, Sector-16, Uttar Pradesh, 201301</p>
            </div>
            <p>Your privacy matters to us, and we are committed to protecting it while you enjoy the services offered by LoanBazar.</p>
          </div>

          <div className="legal-footer">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            <p> 2024 LoanBazar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy;
