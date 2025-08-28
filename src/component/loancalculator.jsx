// LoanCalculator.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import '../index.css'

const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [loanType, setLoanType] = useState("personal");
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

  // Quick amount selection based on loansjagat.com data
  const quickAmounts = [
    { label: "₹5 Lakh", value: "500000" },
    { label: "₹10 Lakh", value: "1000000" },
    { label: "₹15 Lakh", value: "1500000" },
    { label: "₹20 Lakh", value: "2000000" },
    { label: "₹25 Lakh", value: "2500000" },
    { label: "₹50 Lakh", value: "5000000" }
  ];

  // Loan type configurations
  const loanTypes = {
    personal: { rate: "10.99", maxTenure: 7, name: "Personal Loan" },
    business: { rate: "12.50", maxTenure: 5, name: "Business Loan" },
    home: { rate: "8.50", maxTenure: 30, name: "Home Loan" },
    debt: { rate: "11.99", maxTenure: 7, name: "Debt Consolidation" }
  };

  const handleLoanTypeChange = (type) => {
    setLoanType(type);
    setRate(loanTypes[type].rate);
    // Reset tenure if it exceeds max for selected loan type
    if (term && parseInt(term) > loanTypes[type].maxTenure) {
      setTerm(loanTypes[type].maxTenure.toString());
    }
  };

  const handleQuickAmount = (value) => {
    setAmount(value);
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
      totalInterest: totalInterest.toFixed(2),
      loanTypeName: loanTypes[loanType].name
    });
  };

  const resetCalculator = () => {
    setAmount("");
    setRate("");
    setTerm("");
    setResults(null);
    setLoanType("personal");
  };

  return (
    <section id="calculator" className="loan-calculator">
      <div className="container" data-aos="fade-up">
        <h2>EMI Calculator</h2>
        <p className="calculator-subtitle">Calculate your monthly EMI and plan your finances with our enhanced calculator</p>
        
        <div className="calculator-main-layout">
          <div className="calculator-container">
            <div className="calculator-form" data-aos="fade-right">
              {/* Loan Type Selection */}
              <div className="input-group">
                <label>Loan Type</label>
                <div className="loan-type-buttons">
                  {Object.entries(loanTypes).map(([key, config]) => (
                    <button
                      key={key}
                      className={`loan-type-btn ${loanType === key ? 'active' : ''}`}
                      onClick={() => handleLoanTypeChange(key)}
                      type="button"
                    >
                      {config.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Amount Selection */}
              <div className="input-group">
                <label>Loan Amount (₹)</label>
                <div className="quick-amounts">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt.value}
                      className={`quick-amount-btn ${amount === amt.value ? 'active' : ''}`}
                      onClick={() => handleQuickAmount(amt.value)}
                      type="button"
                    >
                      {amt.label}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Or enter custom amount"
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
                <small className="rate-hint">Current rate for {loanTypes[loanType].name}: {loanTypes[loanType].rate}%</small>
              </div>

              <div className="input-group">
                <label>Loan Tenure (Years)</label>
                <input
                  type="number"
                  placeholder={`Max ${loanTypes[loanType].maxTenure} years`}
                  value={term}
                  max={loanTypes[loanType].maxTenure}
                  onChange={(e) => setTerm(e.target.value)}
                  className="calculator-input"
                />
                <small className="tenure-hint">Maximum tenure: {loanTypes[loanType].maxTenure} years</small>
              </div>

              <div className="calculator-buttons">
                <button onClick={calculatePayment} className="calculate-btn">Calculate EMI</button>
                <button onClick={resetCalculator} className="reset-btn">Reset</button>
              </div>
            </div>
            
            {results && (
              <div className="calculator-results" data-aos="fade-left">
                <h3>{results.loanTypeName} Breakdown</h3>
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
                  <p>Ready to apply for this {results.loanTypeName.toLowerCase()}?</p>
                  <button className="apply-now-btn" onClick={handleApplyClick}>Apply Now</button>
                </div>
              </div>
            )}
          </div>
          {/* Calculator Features */}
          <div className="calculator-features" data-aos="fade-up">
            <h3>Why Use Our EMI Calculator?</h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🧮</div>
                <h4>Accurate Calculations</h4>
                <p>Get precise EMI calculations for all loan types</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h4>Quick Selection</h4>
                <p>Choose from popular loan amounts instantly</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h4>Multiple Loan Types</h4>
                <p>Calculate EMI for personal, business, home & debt consolidation loans</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <h4>Smart Suggestions</h4>
                <p>Get current interest rates and tenure limits automatically</p>
              </div>
            </div>
          </div>
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
