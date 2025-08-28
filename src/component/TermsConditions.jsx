import React from 'react';
import '../index.css';

const TermsConditions = () => {
  return (
    <section className="legal-page">
      <div className="container" data-aos="fade-up">
        <div className="legal-header">
          <h1>Terms & Conditions</h1>
          <p className="legal-subtitle">Please read these terms and conditions carefully before using LoanBazar services</p>
        </div>

        <div className="legal-content">
          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the LoanBazar website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          </div>

          <div className="legal-section">
            <h2>2. Information Collection and Usage</h2>
            <p>LoanBazar collects personal information to provide you with the best possible service. This includes:</p>
            <ul>
              <li>Name, gender, residential/correspondence address, telephone number, date of birth, marital status, email address</li>
              <li>Other contact information</li>
              <li>Aadhaar, PAN, KYC Status, Signature and Photograph</li>
              <li>Bank account or other payment instrument details</li>
              <li>Any other detail necessary for providing services</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Consent and Authorization</h2>
            <p>By using our services, you provide consent for LoanBazar to:</p>
            <ul>
              <li>Access your credit information from credit bureaus</li>
              <li>Share your information with partner banks and financial institutions</li>
              <li>Contact you via email, SMS, WhatsApp, post, telephone for service-related communications</li>
              <li>Use your information for marketing purposes (with option to opt-out)</li>
            </ul>
            <p>This consent/authorization shall be valid for a maximum period of 6 months from the date of giving the same, or until you withdraw your consent by informing LoanBazar.</p>
          </div>

          <div className="legal-section">
            <h2>4. Account Security</h2>
            <p>You are responsible for maintaining the confidentiality of your login credentials and may not provide these to any third party. If you believe your credentials have been compromised, contact us immediately at <strong>loanbazar76@gmail.com</strong>.</p>
          </div>

          <div className="legal-section">
            <h2>5. Do Not Call (DNC) Waiver</h2>
            <p>By using LoanBazar services, you consent to waive the Do Not Call (DNC) / Do Not Disturb (DND) registrations on your phone numbers for service-related communications. Various modes of contact may include telephonic calls or SMS at frequent intervals.</p>
          </div>

          <div className="legal-section">
            <h2>6. Fraud Prevention</h2>
            <p>In case we suspect any fraud or inaccurate information, details may be shared with fraud prevention agencies to prevent frauds and money laundering.</p>
          </div>

          <div className="legal-section">
            <h2>7. Service Limitations</h2>
            <p>LoanBazar acts as an intermediary platform connecting borrowers with lenders. We do not guarantee loan approval and final decisions rest with the respective financial institutions.</p>
          </div>

          <div className="legal-section">
            <h2>8. Modification of Terms</h2>
            <p>LoanBazar reserves the right to modify these terms at any time without prior notice. Continued use of our services constitutes acceptance of modified terms.</p>
          </div>

          <div className="legal-section">
            <h2>9. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of courts in Noida, Uttar Pradesh.</p>
          </div>

          <div className="legal-section">
            <h2>10. Contact Information</h2>
            <p>For any questions or concerns regarding these terms, please contact us:</p>
            <div className="contact-details">
              <p><strong>Email:</strong> loanbazar76@gmail.com</p>
              <p><strong>Phone:</strong> +91 7678507025</p>
              <p><strong>Address:</strong> A12 Noida, Sector-16, Uttar Pradesh, 201301</p>
            </div>
          </div>

          <div className="legal-footer">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            <p>© 2024 LoanBazar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
