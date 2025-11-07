import React from "react";
import "./aboutSection.css";
import { PiMedalLight } from "react-icons/pi";
import { BiCheckCircle } from "react-icons/bi";
import { LuUsersRound } from "react-icons/lu";
import { PiLightbulbFilament } from "react-icons/pi";

const AboutSection = () => {
  return (
    <div className="about_section">
      <div className="about_section_container">
        <div className="about_section_content">
          <div className="about_section_content_top">
            <h2>عن مؤسستنا</h2>
            <p>
              نحن في إم فورس نفخر بخبرة واسعة تمتد لسنوات في مجال البناء
              والتشييد. نتميز بتقديم حلول متكاملة تلبي احتياجات العملاء في مختلف
              القطاعات السكنية والتجارية والصناعية نعتمد على فريق من المهندسين
              والمتخصصين ذوي الكفاءة العالية لضمان تنفيذ المشاريع بأعلى معايير
              الجودة والدقة. نحن نؤمن بأن نجاح مشاريعنا هو انعكاس مباشر لثقة
              عملائنا، لذا نحرص على بناء شراكات متينة قائمة على المصداقية
              والشفافية والالتزام.
            </p>
          </div>
          <div className="about_section_content_botten">
            <div className="about_section_item">
              <PiMedalLight className="about_section_icon" />
              <h3>جودة</h3>
            </div>
            <div className="about_section_item">
              <BiCheckCircle className="about_section_icon" />
              <h3>خبرة</h3>
            </div>
            <div className="about_section_item">
              <PiLightbulbFilament className="about_section_icon" />
              <h3>إبداع</h3>
            </div>
            <div className="about_section_item">
              <LuUsersRound className="about_section_icon" />
              <h3>التزام</h3>
            </div>
          </div>
        </div>

        <div className="about_section_botten">
          <img src="./Images/about.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
