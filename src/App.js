import React, { useEffect } from "react";
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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <Navb></Navb>
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

export default App;

