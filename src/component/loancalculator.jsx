// LoanCalculator.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import '../index.css'

const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleApplyClick = () => {
    setShowPopup(true);
    
    // Auto-hide popup after 3 seconds and scroll to contact
    setTimeout(() => {
      setShowPopup(false);
      document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 3000);
  };

  const calculatePayment = () => {
    if (!amount || !rate || !term) {
      alert("Please fill all fields");
      return;
    }
    
    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseFloat(term) * 12;
    
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;
    
    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    });
  };

  const resetCalculator = () => {
    setAmount("");
    setRate("");
    setTerm("");
    setResults(null);
  };

  return (
    <section id="calculator" className="loan-calculator">
      <div className="container" data-aos="fade-up">
        <h2>EMI Calculator</h2>
        <p className="calculator-subtitle">Calculate your monthly EMI and plan your finances</p>
        
        <div className="calculator-container">
          <div className="calculator-form" data-aos="fade-right">
            <div className="input-group">
              <label>Loan Amount (₹)</label>
              <input
                type="number"
                placeholder="e.g., 500000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="calculator-input"
              />
            </div>
            <div className="input-group">
              <label>Interest Rate (% per annum)</label>
              <input
                type="number"
                step="0.01"
                placeholder="e.g., 10.5"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="calculator-input"
              />
            </div>
            <div className="input-group">
              <label>Loan Tenure (Years)</label>
              <input
                type="number"
                placeholder="e.g., 5"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="calculator-input"
              />
            </div>
            <div className="calculator-buttons">
              <button onClick={calculatePayment} className="calculate-btn">Calculate EMI</button>
              <button onClick={resetCalculator} className="reset-btn">Reset</button>
            </div>
          </div>
          
          {results && (
            <div className="calculator-results" data-aos="fade-left">
              <h3>Loan Breakdown</h3>
              <div className="result-item">
                <span>Monthly EMI:</span>
                <strong>₹ {results.monthlyPayment}</strong>
              </div>
              <div className="result-item">
                <span>Total Amount Payable:</span>
                <strong>₹ {results.totalPayment}</strong>
              </div>
              <div className="result-item">
                <span>Total Interest:</span>
                <strong>₹ {results.totalInterest}</strong>
              </div>
              <div className="apply-section">
                <p>Ready to apply for this loan?</p>
                <button className="apply-now-btn" onClick={handleApplyClick}>Apply Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Popup Animation */}
      {showPopup && (
        <div className="apply-popup-overlay">
          <div className="apply-popup">
            <div className="popup-icon">🎯</div>
            <h3>Great Choice!</h3>
            <p>You've calculated your <strong>EMI Details</strong></p>
            <p>Redirecting you to our application form...</p>
            <div className="popup-loader"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoanCalculator;
