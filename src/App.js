import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navb from "./component/navv";
import HomePage from "./component/homepage";
import Services from "./component/services";
import LoanCalculator from "./component/loancalculator";
import EligibilityChecker from "./component/eligibility";
import About from "./component/about";
import Testimonials from "./component/testimonials";
import ContactUs from "./component/contactus";
import FAQs from "./component/faqs";
import Footer from "./component/footer";
import AdminPanel from "./component/AdminPanel";
import TermsConditions from "./component/TermsConditions";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Disclaimer from "./component/Disclaimer";
import CookiesPolicy from "./component/CookiesPolicy";

// Main App Component
const MainApp = () => {
  return (
    <>
      <HomePage></HomePage>
      <Services></Services>
      <LoanCalculator></LoanCalculator>
      <EligibilityChecker></EligibilityChecker>
      <About></About>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <FAQs></FAQs>
      <Footer></Footer>
    </>
  );
};

// Legal Page Layout Component
const LegalPageLayout = ({ children }) => {
  return (
    <>
      <Navb></Navb>
      {children}
      <Footer></Footer>
    </>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navb></Navb>
            <MainApp></MainApp>
          </>
        } />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/terms-conditions" element={
          <LegalPageLayout>
            <TermsConditions />
          </LegalPageLayout>
        } />
        <Route path="/privacy-policy" element={
          <LegalPageLayout>
            <PrivacyPolicy />
          </LegalPageLayout>
        } />
        <Route path="/disclaimer" element={
          <LegalPageLayout>
            <Disclaimer />
          </LegalPageLayout>
        } />
        <Route path="/cookies-policy" element={
          <LegalPageLayout>
            <CookiesPolicy />
          </LegalPageLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
