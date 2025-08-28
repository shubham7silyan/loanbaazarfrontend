import React from 'react';
import '../index.css';

const Disclaimer = () => {
  return (
    <section className="legal-page">
      <div className="container" data-aos="fade-up">
        <div className="legal-header">
          <h1>Disclaimer</h1>
          <p className="legal-subtitle">Important information regarding the use of LoanBazar services</p>
        </div>

        <div className="legal-content">
          <div className="legal-section">
            <h2>Information Accuracy</h2>
            <p>While we strive to ensure the accuracy and reliability of the information provided, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website. Any reliance you place on such information is strictly at your own risk.</p>
          </div>

          <div className="legal-section">
            <h2>Third-Party Links</h2>
            <p>LoanBazar may contain links to third-party websites for your convenience. However, we do not endorse or take responsibility for the content, privacy policies, or practices of these websites. Users are advised to review the terms and conditions of any third-party websites before using their services.</p>
          </div>

          <div className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>In no event shall LoanBazar be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of the LoanBazar website.</p>
          </div>

          <div className="legal-section">
            <h2>Service Disclaimer</h2>
            <p>LoanBazar acts as an intermediary platform connecting borrowers with lenders. We do not:</p>
            <ul>
              <li>Guarantee loan approval from any financial institution</li>
              <li>Control interest rates or loan terms offered by lenders</li>
              <li>Act as a lender or provide direct financial services</li>
              <li>Make credit decisions on behalf of financial institutions</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Interest Rates and Offers</h2>
            <p>All interest rates, loan amounts, and offers displayed on LoanBazar are indicative and subject to change. Final terms and conditions are determined by the respective financial institutions based on their internal policies and your creditworthiness.</p>
          </div>

          <div className="legal-section">
            <h2>Changes to Terms</h2>
            <p>LoanBazar reserves the right to modify, amend, or change any terms of this disclaimer at any time without prior notice. By continuing to use the website, you agree to be bound by the updated terms of the disclaimer.</p>
          </div>

          <div className="legal-section">
            <h2>Fraud Alert</h2>
            <div className="fraud-alert">
              <h3>⚠️ Beware Of Fraudulent Phone Calls And E-Mails</h3>
              <p>To be clear, neither LoanBazar nor its representatives will ever request payment in cash or from clients in exchange for any of our services. If you are receiving such types of calls, it is requested to contact LoanBazar immediately.</p>
              <div className="contact-details">
                <p><strong>Report Fraud:</strong> loanbazar76@gmail.com</p>
                <p><strong>Emergency Contact:</strong> +91 7678507025</p>
              </div>
            </div>
          </div>

          <div className="legal-section">
            <h2>Regulatory Compliance</h2>
            <p>LoanBazar operates in compliance with applicable Indian laws and regulations. However, users are advised to verify the regulatory status of financial products and services before making any commitments.</p>
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

export default Disclaimer;
