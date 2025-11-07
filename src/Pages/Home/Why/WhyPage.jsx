import React from "react";
import "./whyPage.css";
import { MdOutlineTimer } from "react-icons/md";
import { LiaIconsSolid } from "react-icons/lia";
import { SiSpringsecurity } from "react-icons/si";
import { CiStar } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { CiMoneyCheck1 } from "react-icons/ci";


const WhyPage = () => {
  return (
    <section className="why_page">
      <h2>لماذا نحن؟</h2>
      <div className="why_page_container">
        <div className="why_page_content">
          <MdOutlineTimer />
          <h5 className="why_page_content_tit">الالتزام بالمواعيد</h5>
        </div>
        <div className="why_page_content">
          <LiaIconsSolid />
          <h5 className="why_page_content_tit">استخدام احدث التقنيات</h5>
        </div>
        <div className="why_page_content">
          <SiSpringsecurity />
          <h5 className="why_page_content_tit">اشراف هندسي متخصص</h5>
        </div>
        <div className="why_page_content">
          <CiStar />
          <h5 className="why_page_content_tit">جوده عاليه في التنفيد</h5>
        </div>
        <div className="why_page_content">
          <FiFileText />
          <h5 className="why_page_content_tit">تقارير دوريه للعميل</h5>
        </div>
        <div className="why_page_content">
          <CiMoneyCheck1 />
          <h5 className="why_page_content_tit">اسعار منافسه</h5>
        </div>
      </div>
    </section>
  );
};

export default WhyPage;
