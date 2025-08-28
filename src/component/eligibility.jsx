import React, { useState } from "react";
import '../index.css';
import { paisabazaarData, getCreditScoreStatus, getLoanByType } from '../services/paisabazaarData';

const EligibilityChecker = () => {
    const [formData, setFormData] = useState({
        income: '',
        age: '',
        employment: '',
        creditScore: '',
        existingLoans: '',
        loanType: 'Personal Loan'
    });
    
    const [eligibilityResult, setEligibilityResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const checkEligibility = () => {
        const { income, age, employment, creditScore, loanType } = formData;
        
        if (!income || !age || !employment || !creditScore) {
            alert("Please fill all required fields");
            return;
        }

        setIsLoading(true);
        
        // Simulate loading for better UX
        setTimeout(() => {
            // Get loan-specific data from PaisaBazaar
            const selectedLoan = getLoanByType(loanType);
            if (!selectedLoan) {
                setIsLoading(false);
                return;
            }

            let score = 0;
            let maxLoanAmount = 0;
            let recommendations = [];
            let eligibleBanks = [];

            // Enhanced scoring based on PaisaBazaar criteria
            const monthlyIncome = parseInt(income);
            const userAge = parseInt(age);
            const userCreditScore = parseInt(creditScore);

            // Income-based scoring (more realistic)
            if (monthlyIncome >= selectedLoan.eligibility.minIncome) {
                score += 25;
                if (monthlyIncome >= 50000) score += 10;
                if (monthlyIncome >= 100000) score += 10;
                if (monthlyIncome >= 200000) score += 5;
            }

            // Age scoring based on loan type
            if (userAge >= selectedLoan.eligibility.minAge && userAge <= selectedLoan.eligibility.maxAge) {
                score += 20;
                // Sweet spot for most loans
                if (userAge >= 25 && userAge <= 50) score += 5;
            }

            // Employment type scoring
            if (selectedLoan.eligibility.employmentTypes.includes(employment)) {
                score += 15;
                if (employment === 'Salaried') score += 5; // Slightly prefer salaried
            }

            // Credit score - most important factor
            if (userCreditScore >= selectedLoan.eligibility.minCreditScore) {
                score += 25;
                if (userCreditScore >= 750) score += 10;
                if (userCreditScore >= 800) score += 5;
            }

            // Calculate loan amount based on income and loan type
            let multiplier = 10; // Default multiplier
            switch (loanType) {
                case 'Personal Loan':
                    multiplier = userCreditScore >= 750 ? 15 : 12;
                    break;
                case 'Home Loan':
                    multiplier = userCreditScore >= 750 ? 60 : 50;
                    break;
                case 'Business Loan':
                    multiplier = userCreditScore >= 750 ? 25 : 20;
                    break;
                case 'Loan Against Property':
                    multiplier = userCreditScore >= 750 ? 40 : 30;
                    break;
            }

            maxLoanAmount = Math.min(monthlyIncome * multiplier, 
                                    parseInt(selectedLoan.maxAmount.replace(/[₹,]/g, '')) * 100000);

            // Get eligible banks based on score and criteria
            eligibleBanks = selectedLoan.banks.filter(bank => {
                const bankMaxAmount = parseInt(bank.maxAmount.replace(/[₹,]/g, '')) * 100000;
                return maxLoanAmount <= bankMaxAmount && score >= 60;
            });

            // Generate recommendations based on score
            if (score >= 80) {
                recommendations = [
                    `${loanType} - Premium rates available`,
                    "Pre-approved offers likely",
                    "Multiple bank options",
                    "Instant approval possible"
                ];
            } else if (score >= 60) {
                recommendations = [
                    `${loanType} - Standard rates`,
                    "Good approval chances",
                    "Documentation required",
                    "Processing in 2-3 days"
                ];
            } else if (score >= 40) {
                recommendations = [
                    "Consider improving credit score",
                    "Secured loan options",
                    "Co-applicant may help",
                    "Higher documentation needed"
                ];
            } else {
                recommendations = [
                    "Credit score improvement needed",
                    "Secured loans recommended",
                    "Consider smaller loan amount",
                    "Financial counseling suggested"
                ];
            }

            const creditScoreInfo = getCreditScoreStatus(userCreditScore);

            setEligibilityResult({
                score,
                eligible: score >= 50,
                maxLoanAmount,
                recommendations,
                selectedLoan,
                eligibleBanks,
                creditScoreInfo,
                interestRateRange: score >= 80 ? selectedLoan.interestRate : 
                                 score >= 60 ? `${parseFloat(selectedLoan.interestRate) + 1}% p.a. onwards` :
                                 `${parseFloat(selectedLoan.interestRate) + 2}% p.a. onwards`
            });
            
            setIsLoading(false);
        }, 1500);
    };

    return (
        <section id="eligibility" className="eligibility-checker">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <div className="header-icon">
                        <i className="fas fa-calculator"></i>
                    </div>
                    <h2>Check Your Loan Eligibility</h2>
                    <p className="eligibility-subtitle">
                        Get instant eligibility assessment with real bank data in 2 minutes
                        <br />
                        <span className="highlight-text">✨ Powered by AI & Real-time Bank Data</span>
                    </p>
                </div>
                
                <div className="eligibility-container">
                    <div className="eligibility-form" data-aos="fade-right">
                        <div className="form-header">
                            <h3>
                                <i className="fas fa-user-check"></i>
                                Personal Information
                            </h3>
                            <p>Fill in your details to check eligibility</p>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>
                                    <i className="fas fa-hand-holding-usd"></i>
                                    Loan Type *
                                </label>
                                <div className="select-wrapper">
                                    <select name="loanType" value={formData.loanType} onChange={handleChange}>
                                        {paisabazaarData.loanProducts.map(loan => (
                                            <option key={loan.id} value={loan.title}>{loan.title}</option>
                                        ))}
                                    </select>
                                    <i className="fas fa-chevron-down select-arrow"></i>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>
                                    <i className="fas fa-rupee-sign"></i>
                                    Monthly Income (₹) *
                                </label>
                                <div className="select-wrapper">
                                    <select name="income" value={formData.income} onChange={handleChange}>
                                        <option value="">Select Income Range</option>
                                        <option value="25000">₹25,000 - ₹50,000</option>
                                        <option value="50000">₹50,000 - ₹1,00,000</option>
                                        <option value="100000">₹1,00,000 - ₹2,00,000</option>
                                        <option value="200000">₹2,00,000+</option>
                                    </select>
                                    <i className="fas fa-chevron-down select-arrow"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="input-group">
                                <label>
                                    <i className="fas fa-birthday-cake"></i>
                                    Age *
                                </label>
                                <div className="input-wrapper">
                                    <input
                                        type="number"
                                        name="age"
                                        placeholder="Enter your age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        min="18"
                                        max="70"
                                    />
                                    <i className="fas fa-user input-icon"></i>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>
                                    <i className="fas fa-briefcase"></i>
                                    Employment Type *
                                </label>
                                <div className="select-wrapper">
                                    <select name="employment" value={formData.employment} onChange={handleChange}>
                                        <option value="">Select Employment</option>
                                        <option value="Salaried">Salaried</option>
                                        <option value="Self-employed">Self Employed</option>
                                        <option value="Business Owner">Business Owner</option>
                                        <option value="Professional">Professional</option>
                                    </select>
                                    <i className="fas fa-chevron-down select-arrow"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="input-group">
                                <label>
                                    <i className="fas fa-chart-line"></i>
                                    Credit Score *
                                </label>
                                <div className="select-wrapper">
                                    <select name="creditScore" value={formData.creditScore} onChange={handleChange}>
                                        <option value="">Select Credit Score</option>
                                        <option value="350">300 - 550 (Poor)</option>
                                        <option value="600">550 - 650 (Fair)</option>
                                        <option value="700">650 - 750 (Good)</option>
                                        <option value="800">750+ (Excellent)</option>
                                    </select>
                                    <i className="fas fa-chevron-down select-arrow"></i>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>
                                    <i className="fas fa-credit-card"></i>
                                    Existing Loan EMIs (₹)
                                </label>
                                <div className="input-wrapper">
                                    <input
                                        type="number"
                                        name="existingLoans"
                                        placeholder="Total monthly EMI (optional)"
                                        value={formData.existingLoans}
                                        onChange={handleChange}
                                    />
                                    <i className="fas fa-calculator input-icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <button 
                            onClick={checkEligibility} 
                            className={`check-eligibility-btn ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i>
                                    Checking Eligibility...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-search"></i>
                                    Check Eligibility
                                </>
                            )}
                        </button>

                        <div className="form-footer">
                            <div className="security-badge">
                                <i className="fas fa-shield-alt"></i>
                                <span>100% Secure & Confidential</span>
                            </div>
                            <div className="features-list">
                                <span><i className="fas fa-check"></i> No Hidden Charges</span>
                                <span><i className="fas fa-check"></i> Instant Results</span>
                                <span><i className="fas fa-check"></i> Real Bank Data</span>
                            </div>
                        </div>
                    </div>
                    
                    {eligibilityResult && (
                        <div className="eligibility-results" data-aos="fade-left">
                            <div className="results-header">
                                <h3>
                                    <i className="fas fa-chart-pie"></i>
                                    Eligibility Results
                                </h3>
                            </div>

                            <div className={`eligibility-status ${eligibilityResult.eligible ? 'eligible' : 'not-eligible'}`}>
                                <div className="status-content">
                                    <div className="status-icon">
                                        {eligibilityResult.eligible ? (
                                            <i className="fas fa-check-circle"></i>
                                        ) : (
                                            <i className="fas fa-exclamation-triangle"></i>
                                        )}
                                    </div>
                                    <h4>
                                        {eligibilityResult.eligible ? 'Congratulations! You are Eligible' : 'Limited Eligibility'}
                                    </h4>
                                    <p>
                                        {eligibilityResult.eligible 
                                            ? 'You qualify for loan approval with competitive rates'
                                            : 'You may still qualify with additional documentation'
                                        }
                                    </p>
                                </div>
                                
                                <div className="score-display">
                                    <div className="score-circle">
                                        <div className="score-inner">
                                            <span className="score-number">{eligibilityResult.score}</span>
                                            <span className="score-total">/100</span>
                                        </div>
                                        <div className="score-ring" style={{
                                            background: `conic-gradient(
                                                ${eligibilityResult.score >= 80 ? '#28a745' : 
                                                  eligibilityResult.score >= 60 ? '#ffc107' : '#dc3545'} 
                                                ${eligibilityResult.score * 3.6}deg, 
                                                #e9ecef 0deg
                                            )`
                                        }}></div>
                                    </div>
                                    <div className="score-label">
                                        Eligibility Score
                                    </div>
                                </div>
                            </div>

                            <div className="credit-score-card">
                                <div className="credit-score-header">
                                    <i className="fas fa-star"></i>
                                    <span>Credit Score Analysis</span>
                                </div>
                                <div className="credit-score-info" style={{color: eligibilityResult.creditScoreInfo.color}}>
                                    <strong>{eligibilityResult.creditScoreInfo.status}</strong>
                                    <p>{eligibilityResult.creditScoreInfo.description}</p>
                                </div>
                            </div>
                            
                            <div className="loan-details-grid">
                                <div className="detail-card">
                                    <div className="detail-icon">
                                        <i className="fas fa-money-bill-wave"></i>
                                    </div>
                                    <div className="detail-content">
                                        <span className="detail-label">Maximum Loan Amount</span>
                                        <strong className="detail-value">₹ {eligibilityResult.maxLoanAmount.toLocaleString()}</strong>
                                    </div>
                                </div>
                                
                                <div className="detail-card">
                                    <div className="detail-icon">
                                        <i className="fas fa-percentage"></i>
                                    </div>
                                    <div className="detail-content">
                                        <span className="detail-label">Expected Interest Rate</span>
                                        <strong className="detail-value">{eligibilityResult.interestRateRange}</strong>
                                    </div>
                                </div>
                                
                                <div className="detail-card">
                                    <div className="detail-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="detail-content">
                                        <span className="detail-label">Processing Time</span>
                                        <strong className="detail-value">{eligibilityResult.selectedLoan.processingTime}</strong>
                                    </div>
                                </div>
                            </div>
                                
                            {eligibilityResult.eligibleBanks.length > 0 && (
                                <div className="eligible-banks-section">
                                    <div className="section-title">
                                        <i className="fas fa-university"></i>
                                        <h4>Eligible Banks & NBFCs</h4>
                                    </div>
                                    <div className="bank-grid">
                                        {eligibilityResult.eligibleBanks.map((bank, index) => (
                                            <div key={index} className="bank-card">
                                                <div className="bank-header">
                                                    <i className="fas fa-building"></i>
                                                    <strong>{bank.name}</strong>
                                                </div>
                                                <div className="bank-details">
                                                    <div className="bank-rate">
                                                        <span>Interest Rate</span>
                                                        <strong>{bank.rate}</strong>
                                                    </div>
                                                    <div className="bank-amount">
                                                        <span>Max Amount</span>
                                                        <strong>{bank.maxAmount}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            <div className="recommendations-section">
                                <div className="section-title">
                                    <i className="fas fa-lightbulb"></i>
                                    <h4>Personalized Recommendations</h4>
                                </div>
                                <div className="recommendations-grid">
                                    {eligibilityResult.recommendations.map((recommendation, index) => (
                                        <div key={index} className="recommendation-card">
                                            <i className="fas fa-check-circle"></i>
                                            <span>{recommendation}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="action-buttons">
                                <button className="proceed-btn primary">
                                    <i className="fas fa-arrow-right"></i>
                                    Proceed with Application
                                </button>
                                <button className="proceed-btn secondary">
                                    <i className="fas fa-download"></i>
                                    Download Report
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EligibilityChecker;
