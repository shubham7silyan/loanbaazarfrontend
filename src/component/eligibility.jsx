import React, { useState } from "react";
import '../index.css';

const EligibilityChecker = () => {
    const [formData, setFormData] = useState({
        income: '',
        age: '',
        employment: '',
        creditScore: '',
        existingLoans: ''
    });
    
    const [eligibilityResult, setEligibilityResult] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const checkEligibility = () => {
        const { income, age, employment, creditScore, existingLoans } = formData;
        
        if (!income || !age || !employment || !creditScore) {
            alert("Please fill all required fields");
            return;
        }

        let score = 0;
        let maxLoanAmount = 0;
        let recommendations = [];

        // Income check
        if (parseInt(income) >= 25000) score += 25;
        if (parseInt(income) >= 50000) score += 15;
        if (parseInt(income) >= 100000) score += 10;

        // Age check
        if (parseInt(age) >= 21 && parseInt(age) <= 60) score += 20;

        // Employment check
        if (employment === 'salaried') score += 20;
        if (employment === 'self-employed') score += 15;

        // Credit score check
        if (parseInt(creditScore) >= 750) score += 20;
        else if (parseInt(creditScore) >= 650) score += 10;

        // Calculate max loan amount (typically 10-15x monthly income)
        maxLoanAmount = parseInt(income) * 12;

        // Generate recommendations
        if (score >= 70) {
            recommendations = ["Personal Loan", "Home Loan", "Business Loan"];
        } else if (score >= 50) {
            recommendations = ["Personal Loan", "Secured Loans"];
        } else {
            recommendations = ["Secured Loans with Collateral"];
        }

        setEligibilityResult({
            score,
            eligible: score >= 50,
            maxLoanAmount,
            recommendations
        });
    };

    return (
        <section id="eligibility" className="eligibility-checker">
            <div className="container" data-aos="fade-up">
                <h2>Check Your Loan Eligibility</h2>
                <p className="eligibility-subtitle">Get instant eligibility assessment in 2 minutes</p>
                
                <div className="eligibility-container">
                    <div className="eligibility-form" data-aos="fade-right">
                        <div className="form-row">
                            <div className="input-group">
                                <label>Monthly Income (₹) *</label>
                                <select name="income" value={formData.income} onChange={handleChange}>
                                    <option value="">Select Income Range</option>
                                    <option value="25000">₹25,000 - ₹50,000</option>
                                    <option value="50000">₹50,000 - ₹1,00,000</option>
                                    <option value="100000">₹1,00,000 - ₹2,00,000</option>
                                    <option value="200000">₹2,00,000+</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Age *</label>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Enter your age"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="input-group">
                                <label>Employment Type *</label>
                                <select name="employment" value={formData.employment} onChange={handleChange}>
                                    <option value="">Select Employment</option>
                                    <option value="salaried">Salaried</option>
                                    <option value="self-employed">Self Employed</option>
                                    <option value="business">Business Owner</option>
                                    <option value="professional">Professional</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Credit Score *</label>
                                <select name="creditScore" value={formData.creditScore} onChange={handleChange}>
                                    <option value="">Select Credit Score</option>
                                    <option value="300">300 - 550 (Poor)</option>
                                    <option value="550">550 - 650 (Fair)</option>
                                    <option value="650">650 - 750 (Good)</option>
                                    <option value="750">750+ (Excellent)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="input-group">
                            <label>Existing Loan EMIs (₹)</label>
                            <input
                                type="number"
                                name="existingLoans"
                                placeholder="Total monthly EMI (optional)"
                                value={formData.existingLoans}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <button onClick={checkEligibility} className="check-eligibility-btn">
                            Check Eligibility
                        </button>
                    </div>
                    
                    {eligibilityResult && (
                        <div className="eligibility-results" data-aos="fade-left">
                            <div className={`eligibility-status ${eligibilityResult.eligible ? 'eligible' : 'not-eligible'}`}>
                                <h3>
                                    {eligibilityResult.eligible ? '✅ You are Eligible!' : '❌ Limited Eligibility'}
                                </h3>
                                <div className="score-circle">
                                    <span>{eligibilityResult.score}/100</span>
                                </div>
                            </div>
                            
                            <div className="loan-details">
                                <div className="detail-item">
                                    <span>Maximum Loan Amount:</span>
                                    <strong>₹ {eligibilityResult.maxLoanAmount.toLocaleString()}</strong>
                                </div>
                                
                                <div className="recommended-loans">
                                    <h4>Recommended Loan Products:</h4>
                                    <ul>
                                        {eligibilityResult.recommendations.map((loan, index) => (
                                            <li key={index}>{loan}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <button className="proceed-btn">Proceed with Application</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EligibilityChecker;
