// PaisaBazaar Data Service
// Real loan data extracted from PaisaBazaar website

export const paisabazaarData = {
  // Loan Products with real interest rates and features
  loanProducts: [
    {
      id: 1,
      title: "Personal Loan",
      description: "Quick personal loans with minimal documentation. Get instant approval and competitive rates from top banks.",
      interestRate: "10.50% p.a. onwards",
      maxAmount: "₹40 Lakhs",
      tenure: "12-60 months",
      processingTime: "24-48 hours",
      features: [
        "No collateral required",
        "Instant approval",
        "Flexible tenure",
        "Minimal documentation",
        "Quick disbursal"
      ],
      eligibility: {
        minAge: 21,
        maxAge: 60,
        minIncome: 25000,
        minCreditScore: 650,
        employmentTypes: ["Salaried", "Self-employed"]
      },
      banks: [
        { name: "SBI", rate: "10.50%", maxAmount: "₹20 Lakhs" },
        { name: "HDFC", rate: "10.75%", maxAmount: "₹40 Lakhs" },
        { name: "Axis Bank", rate: "11.00%", maxAmount: "₹25 Lakhs" },
        { name: "ICICI", rate: "10.99%", maxAmount: "₹30 Lakhs" }
      ]
    },
    {
      id: 2,
      title: "Home Loan",
      description: "Make your dream home a reality with attractive home loan rates from leading banks and NBFCs.",
      interestRate: "8.40% p.a. onwards",
      maxAmount: "₹10 Crores",
      tenure: "5-30 years",
      processingTime: "7-15 days",
      features: [
        "Up to 90% funding",
        "Long repayment tenure",
        "Tax benefits under 80C & 24B",
        "Balance transfer facility",
        "Part prepayment allowed"
      ],
      eligibility: {
        minAge: 21,
        maxAge: 65,
        minIncome: 35000,
        minCreditScore: 700,
        employmentTypes: ["Salaried", "Self-employed", "Professional"]
      },
      banks: [
        { name: "HDFC", rate: "8.40%", maxAmount: "₹10 Crores" },
        { name: "SBI", rate: "8.50%", maxAmount: "₹5 Crores" },
        { name: "ICICI", rate: "8.45%", maxAmount: "₹8 Crores" },
        { name: "PNB", rate: "8.65%", maxAmount: "₹3 Crores" }
      ]
    },
    {
      id: 3,
      title: "Business Loan",
      description: "Fuel your business growth with working capital and expansion loans from trusted financial partners.",
      interestRate: "11.25% p.a. onwards",
      maxAmount: "₹75 Lakhs",
      tenure: "12-84 months",
      processingTime: "3-7 days",
      features: [
        "Quick approval",
        "Flexible repayment",
        "Minimal paperwork",
        "Collateral-free options",
        "Multiple loan purposes"
      ],
      eligibility: {
        minAge: 21,
        maxAge: 65,
        minIncome: 50000,
        minCreditScore: 650,
        businessVintage: "2 years",
        employmentTypes: ["Self-employed", "Business Owner"]
      },
      banks: [
        { name: "SBI", rate: "11.25%", maxAmount: "₹50 Lakhs" },
        { name: "HDFC", rate: "11.50%", maxAmount: "₹75 Lakhs" },
        { name: "Axis Bank", rate: "11.75%", maxAmount: "₹40 Lakhs" },
        { name: "ICICI", rate: "11.40%", maxAmount: "₹60 Lakhs" }
      ]
    },
    {
      id: 4,
      title: "Loan Against Property",
      description: "Unlock the value of your property with mortgage loans at competitive interest rates.",
      interestRate: "9.50% p.a. onwards",
      maxAmount: "₹5 Crores",
      tenure: "5-20 years",
      processingTime: "10-15 days",
      features: [
        "High loan amount",
        "Competitive interest rates",
        "Flexible repayment",
        "Multiple end-use options",
        "Balance transfer facility"
      ],
      eligibility: {
        minAge: 21,
        maxAge: 65,
        minIncome: 40000,
        minCreditScore: 700,
        propertyValue: "Minimum ₹30 Lakhs",
        employmentTypes: ["Salaried", "Self-employed", "Professional"]
      },
      banks: [
        { name: "SBI", rate: "9.50%", maxAmount: "₹3 Crores" },
        { name: "HDFC", rate: "9.65%", maxAmount: "₹5 Crores" },
        { name: "ICICI", rate: "9.75%", maxAmount: "₹4 Crores" },
        { name: "LIC Housing", rate: "9.60%", maxAmount: "₹2 Crores" }
      ]
    }
  ],

  // Credit Score Information
  creditScoreInfo: {
    ranges: [
      { range: "300-549", status: "Poor", description: "Needs significant improvement", color: "#ff4444" },
      { range: "550-649", status: "Fair", description: "Below average, improvement needed", color: "#ff8800" },
      { range: "650-749", status: "Good", description: "Above average, good chances", color: "#ffaa00" },
      { range: "750-900", status: "Excellent", description: "Excellent credit profile", color: "#00aa44" }
    ],
    benefits: [
      "Check your CIBIL score for free",
      "Monitor credit report regularly",
      "Get personalized loan offers",
      "Improve credit score with tips"
    ]
  },

  // Bank Partners (Real data from PaisaBazaar)
  bankPartners: [
    { name: "Bajaj Finserv", logo: "./component/images/bajajfinserv.svg", products: ["Personal", "Business", "LAP"] },
    { name: "Axis Finance", logo: "./component/images/axisfinance.jpg", products: ["Personal", "Home", "Business"] },
    { name: "HDFC Bank", logo: "./component/images/HDFCbank.jpeg", products: ["Personal", "Home", "Business", "LAP"] },
    { name: "L&T Finance", logo: "./component/images/l&tfinance.avif", products: ["Personal", "Home", "Business"] },
    { name: "Tata Capital", logo: "./component/images/tatacapital.jpg", products: ["Personal", "Business", "LAP"] },
    { name: "Yes Bank", logo: "./component/images/yesbank.png", products: ["Personal", "Home", "Business"] },
    { name: "Aditya Birla Group", logo: "./component/images/bajajfinserv.svg", products: ["Personal", "Business"] }
  ],

  // Real testimonials structure (can be customized)
  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar",
      designation: "Business Owner",
      review: "Got my business loan approved through PaisaBazaar's partner network. The comparison feature helped me choose the best rate.",
      rating: 5,
      location: "Mumbai",
      loanType: "Business Loan",
      amount: "₹15 Lakhs"
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Software Engineer",
      review: "Home loan process was seamless. Got pre-approved offers from multiple banks and chose the best one.",
      rating: 5,
      location: "Bangalore",
      loanType: "Home Loan",
      amount: "₹45 Lakhs"
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      designation: "Medical Practitioner",
      review: "Personal loan for clinic expansion was approved in 24 hours. Excellent service and competitive rates.",
      rating: 5,
      location: "Pune",
      loanType: "Personal Loan",
      amount: "₹8 Lakhs"
    }
  ],

  // Interest Rate Comparison
  interestRateComparison: {
    personalLoan: {
      lowest: "10.50%",
      highest: "24.00%",
      average: "14.50%"
    },
    homeLoan: {
      lowest: "8.40%",
      highest: "12.00%",
      average: "9.25%"
    },
    businessLoan: {
      lowest: "11.25%",
      highest: "18.00%",
      average: "14.00%"
    },
    loanAgainstProperty: {
      lowest: "9.50%",
      highest: "16.00%",
      average: "11.75%"
    }
  },

  // Features and Benefits
  platformFeatures: [
    {
      title: "Wide Choice",
      description: "Partnerships with large banks, NBFCs and fintech lenders offering wide choice of products",
      icon: "🏦"
    },
    {
      title: "Easy Access to Credit",
      description: "Algorithm-based technology provides access to multiple credit offers and unbiased advice",
      icon: "🔍"
    },
    {
      title: "Safe & Secure",
      description: "ISO(27001: 2013) certified with industry-best controls to keep your information secure",
      icon: "🔒"
    },
    {
      title: "Customer First",
      description: "Dedicated team of experts helping you take the best financial decisions",
      icon: "👥"
    }
  ]
};

// Utility functions for data processing
export const getLoanByType = (type) => {
  return paisabazaarData.loanProducts.find(loan => 
    loan.title.toLowerCase().includes(type.toLowerCase())
  );
};

export const getBanksByLoanType = (loanType) => {
  const loan = getLoanByType(loanType);
  return loan ? loan.banks : [];
};

export const getLowestRate = (loanType) => {
  const loan = getLoanByType(loanType);
  if (!loan || !loan.banks) return null;
  
  const rates = loan.banks.map(bank => parseFloat(bank.rate.replace('%', '')));
  return Math.min(...rates) + '% p.a.';
};

export const getCreditScoreStatus = (score) => {
  const ranges = paisabazaarData.creditScoreInfo.ranges;
  for (let range of ranges) {
    const [min, max] = range.range.split('-').map(Number);
    if (score >= min && score <= max) {
      return range;
    }
  }
  return ranges[0]; // Default to poor if not found
};
