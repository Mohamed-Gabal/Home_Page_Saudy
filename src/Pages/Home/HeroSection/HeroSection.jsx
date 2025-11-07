import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero_section" id="section">
      <div className="hero_section_content">
        <div className="hero_section_right">
          <ul className="hero_section_nav">
            <li><a>الرئيسيه</a></li>
            <li><a href="#services">خدماتنا</a></li>
            <li><a href="#projects">مشاريعنا</a></li>
            <li><a href="#section_page">التوظيف</a></li>
          </ul>
        </div>
        <div className="hero_section_left">
          <p className="hero_section_left_par">
            نبني المستقبل بجودة تليق بثقتكم, نقدّم حلولًا متكاملة في البناء
            والتصميم والتنفيذ.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
