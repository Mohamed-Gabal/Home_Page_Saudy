import React from "react";
import "./homePages.css";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import Landing from "./LandingPage/Landing";
import Services from "./Services/Services";
import MyProjects from "./Myprojects/MyProjects";
import WhyPage from "./Why/WhyPage";
import OfferPage from "./offer/OfferPage";
import SectionPage from "./SectionPage/SectionPage";

const HomePage = () => {
  return (
    <div className="home_page">
      <HeroSection />
      <Landing />
      <AboutSection />
      <Services />
      <MyProjects />
      <WhyPage />
      <OfferPage />
      <SectionPage />
    </div>
  );
};
export default HomePage;
