import React from "react";
import "./sectionPage.css";
import { GoArrowUpRight } from "react-icons/go";

const SectionPage = () => {
  return (
    <section className="section_page" id="section_page">
      <h2 className="section_page_title">التوظيف, انضم إلى فريقنا المتميز</h2>
      <p className="my_title">
        نحن نبحث دائمًا عن المواهب الطموحة والمبدعة في مختلف التخصصات الهندسية
        والإدارية. نقدم بيئة عمل داعمة تحفز على التطوير المهني والإبداع، وتضمن
        النمو والتميز لكل فرد في فريقنا. إذا كنت مهتمًا بالانضمام إلى رحلتنا
        وبناء مستقبل مشرق، يرجى إرسال سيرتك الذاتية إلى البريد الإلكتروني:
      </p>
      <button className="section_page_btn">
        <GoArrowUpRight className="section_page_btn_svg"/>
        career@mforce.com.sa
      </button>
    </section>
  );
};
export default SectionPage;
