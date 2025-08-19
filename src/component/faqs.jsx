// FAQs.js
import React, { useState } from "react";
import '../index.css'

const FAQs = () => {
  const faqs = [
    { 
      question: "What documents are required for loan application?", 
      answer: "For salaried individuals: PAN card, Aadhaar card, salary slips (last 3 months), bank statements (last 6 months). For self-employed: PAN card, Aadhaar card, ITR (last 2 years), bank statements (last 12 months), business proof." 
    },
    { 
      question: "How quickly can I get loan approval?", 
      answer: "With our AI-powered assessment system, you can get instant pre-approval within minutes. Final approval and disbursal typically takes 24-48 hours after document verification." 
    },
    { 
      question: "What are the minimum eligibility criteria?", 
      answer: "Age: 21-65 years, Minimum income: ₹25,000/month for salaried, ₹3 lakhs/year for self-employed, Credit score: 650+ preferred, Employment: Minimum 2 years experience." 
    },
    { 
      question: "Can I prepay my loan without penalties?", 
      answer: "Yes! We offer flexible prepayment options. Personal loans have zero prepayment charges after 12 months. Home loans have minimal charges as per RBI guidelines." 
    },
    { 
      question: "What interest rates do you offer?", 
      answer: "Our rates are highly competitive: Personal loans from 10.99% p.a., Home loans from 8.75% p.a., Business loans from 12.50% p.a. Rates depend on your credit profile and loan amount." 
    },
    { 
      question: "Is my personal information secure?", 
      answer: "Absolutely! We use 256-bit SSL encryption and follow RBI data protection guidelines. Your information is never shared with third parties without consent." 
    },
    { 
      question: "Can I apply if I have an existing loan?", 
      answer: "Yes, you can apply for additional loans. We consider your total EMI obligations and debt-to-income ratio during assessment to ensure comfortable repayment." 
    },
    { 
      question: "What if my loan application is rejected?", 
      answer: "We provide detailed feedback on rejection reasons. You can reapply after 3 months or consider our secured loan options with collateral." 
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs">
      <div className="container" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p className="faqs-subtitle">Get answers to common questions about our loan services</p>
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
          <button className="contact-expert-btn">Talk to Expert</button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
