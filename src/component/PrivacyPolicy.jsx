import React from 'react';
import '../index.css';

const PrivacyPolicy = () => {
  return (
    <section className="legal-page">
      <div className="container" data-aos="fade-up">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
        </div>

        <div className="legal-content">
          <div className="legal-section">
            <h2>Information We Collect</h2>
            <p>LoanBazar may collect personal information such as:</p>
            <ul>
              <li>Name, gender, residential/correspondence address, telephone number, date of birth, marital status, email address</li>
              <li>Other contact information</li>
              <li>Aadhaar, PAN, KYC Status, Signature and Photograph</li>
              <li>Bank account or other payment instrument details</li>
              <li>Any other detail necessary for providing services</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Use and Disclosure of Personal & Financial Information</h2>
            <p>We understand that you and your personal information are among our most important assets. We store and process your information, including any sensitive financial information collected (as defined under the Information Technology Act, 2000), on computers protected by physical as well as reasonable technological security measures and procedures in accordance with Information Technology Act 2000 and Rules thereunder.</p>
          </div>

          <div className="legal-section">
            <h2>Purpose of Information Collection</h2>
            <p>LoanBazar offers an online platform for financial products and services. The information collected is used to:</p>
            <ul>
              <li>Process your transaction requests</li>
              <li>Serve you better with personalized offers</li>
              <li>Improve our services</li>
              <li>Keep you updated about new products or information of interest</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Information Sharing</h2>
            <p>The information collected may be shared with:</p>
            <ul>
              <li>Group companies/affiliates/subsidiaries for processing transaction requests</li>
              <li>Partner banks and financial institutions for loan processing</li>
              <li>Credit bureaus for credit assessment</li>
              <li>Statutory authorities as required by law</li>
              <li>Agents and contractors during normal business operations (under strict confidentiality)</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Data Security</h2>
            <p>We protect your personal information against unauthorized use, dissemination, or publication in the same way we would protect our confidential information of similar nature. However, we may be required to disclose your personal and financial information to statutory authorities in accordance with applicable laws.</p>
          </div>

          <div className="legal-section">
            <h2>Marketing Communications</h2>
            <p>We may use your personal information to improve our services and keep you updated about products that may interest you. You can opt-out of marketing communications by contacting us at <strong>loanbazar76@gmail.com</strong>.</p>
          </div>

          <div className="legal-section">
            <h2>Telecom Regulations</h2>
            <p>Notwithstanding whether your telephone/mobile is registered with NDNC and/or TRAI restrictions on unsolicited telecalls, by accessing this site or enquiring about our services, you expressly authorize LoanBazar to contact you for solicitation of various products and services.</p>
          </div>

          <div className="legal-section">
            <h2>Third-Party Offers</h2>
            <p>We may occasionally invite selected third parties to participate in offers we feel would be attractive to LoanBazar customers. If you prefer to limit such sharing, you may contact us to unsubscribe from these services.</p>
          </div>

          <div className="legal-section">
            <h2>Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.</p>
          </div>

          <div className="legal-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Contact Information</h2>
            <p>For any questions about this privacy policy or to exercise your rights, please contact us:</p>
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

export default PrivacyPolicy;
