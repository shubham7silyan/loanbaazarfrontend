// FAQs.js
import React, { useState } from "react";
import '../index.css'

const FAQs = () => {
  const faqs = [
    { 
      question: "How to apply for instant personal loan online in India?", 
      answer: "Apply for instant personal loan online through LoanBazar by comparing rates from 40+ banks and NBFCs. Required documents: Income proof (salary slips), Address proof, Identity proof (PAN card, Aadhaar card). For self-employed: ITR, business proof, bank statements. Processing fees are usually 1%-2% of loan amount." 
    },
    { 
      question: "What is the fastest loan approval time for personal loans?", 
      answer: "Get instant loan approval within 24-48 hours through our digital platform. After document verification, leading banks like HDFC, ICICI, and Axis Bank disburse personal loans within 2-3 working days. Some NBFCs offer same-day loan disbursal for pre-approved customers." 
    },
    { 
      question: "Personal loan eligibility criteria - Am I eligible for instant loan?", 
      answer: "Personal loan eligibility: Minimum age 21 years, regular income (salaried/self-employed), minimum salary ₹25,000 per month, CIBIL score above 650. Eligibility depends on your employer, credit history, income level, and residential location. Loan amount ranges from ₹50,000 to ₹40 lakhs." 
    },
    { 
      question: "Best personal loan interest rates in India 2024", 
      answer: "Compare best personal loan interest rates starting from 10.49% p.a. from top banks. HDFC Bank offers rates from 10.75%, SBI from 10.50%, ICICI from 10.99%. Your interest rate depends on CIBIL score, income, loan amount, tenure, and existing relationship with lender." 
    },
    { 
      question: "Personal loan prepayment charges and foreclosure rules", 
      answer: "Yes, you can prepay personal loans. Prepayment charges range from 2-5% of outstanding amount. Many banks allow free prepayment after 12 EMI payments. Check foreclosure terms before applying. Some lenders offer zero prepayment charges for floating rate loans." 
    },
    { 
      question: "Fixed vs floating interest rates - which is better for personal loans?", 
      answer: "Fixed rate loans: EMI remains constant throughout tenure, better for budget planning. Floating rate loans: EMI changes with market rates, generally lower than fixed rates. Under MCLR rules, floating rates reset annually. Choose based on market outlook and risk appetite." 
    },
    { 
      question: "Joint personal loan application with spouse - higher loan amount", 
      answer: "Apply for joint personal loan with spouse or family members to get higher loan eligibility. Combined income increases loan amount up to ₹40 lakhs. Co-applicant must be spouse, parents, or children. Both applicants' CIBIL scores are considered for approval and interest rate determination." 
    },
    { 
      question: "What happens if I miss personal loan EMI payments?", 
      answer: "Missing EMI payments attracts late payment charges (₹500-₹1000) and negatively impacts CIBIL score. After 90 days default, loan becomes NPA affecting future loan approvals. Contact lender immediately for EMI restructuring or moratorium options to avoid credit score damage." 
    },
    { 
      question: "Business loan vs personal loan - which is better for entrepreneurs?", 
      answer: "Business loans offer higher amounts (up to ₹75 lakhs), lower interest rates (12.50% onwards), longer tenure, and tax benefits. Personal loans provide faster approval but lower amounts (₹40 lakhs max). Choose business loan for expansion, working capital; personal loan for immediate funding needs." 
    },
    { 
      question: "Home loan interest rates and eligibility in India", 
      answer: "Home loan interest rates start from 8.40% p.a. from leading banks. Eligibility: Age 21-65 years, minimum income ₹35,000, CIBIL score 700+. Loan amount up to ₹10 crores with 90% LTV ratio. Tax benefits under Section 80C and 24B. Compare rates from SBI, HDFC, ICICI for best deals." 
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleTalkToExpert = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="faqs" className="faqs">
      <div className="container" data-aos="fade-up">
        <h2>Personal Loan FAQs - Instant Loan Questions Answered</h2>
        <p className="faqs-subtitle">Get expert answers to common questions about personal loans, home loans, and business loans in India</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}>+</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer" data-aos="fade-down">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-cta" data-aos="fade-up">
          <p>Still have questions? Our loan experts are here to help!</p>
          <button className="contact-expert-btn" onClick={handleTalkToExpert}>Talk to Expert</button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
