import React from "react";
import "./services.css";
import { PiPenNibBold } from "react-icons/pi";
import { PiHammerBold } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { PiBackpack } from "react-icons/pi";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services_container">
        <div className="services_container_top">
          <h2>خدماتنا</h2>
          <p>
            نحن مؤسسة رائدة في مجال البناء والمقاولات، نتميز بخبرة واسعة وجودة
            عالية في التنفيذ. نلتزم بتقديم أفضل الحلول الهندسية مع الحفاظ على
            معايير الجودة والسلامة العالمية.
          </p>
        </div>
        <div className="services_container_botten">
          <div className="services_container_botten_items">
            <PiPenNibBold />
            <h4>التششيد والبناء</h4>
            <p>
              إدارة وتنفيذ المشاريع بشكل متكامل من التخطيط والتصميم وحتى
              التشطيبات النهائية والتسليم، مع التنسيق بين جميع التخصصات، وفِرَق
              العمل.
            </p>
          </div>
          <div className="services_container_botten_items">
            <PiHammerBold />
            <h4>اداره المشاريع</h4>
            <p>
              الإشراف الكامل على المشاريع مع إدارة دقيقة للجداول الزمنية
              والميزانيات ومراقبة الجودة لضمان تحقيق النتائج المتوقعة.
            </p>
          </div>
          <div className="services_container_botten_items">
            <PiBuildings />
            <h4>الترميم والتجديد</h4>
            <p>
              تنفيذ أعمال التشطيب عالية الجودة باستخدام أفضل المواد وأحدث
              التصاميم لتلبية الأذواق والاحتياجات المختلفة.
            </p>
          </div>
          <div className="services_container_botten_items">
            <PiPenNibBold />
            <h4>الرسم الهندسي والتخطيط</h4>
            <p>
              ترميم المباني القائمة وتجديدها لتحسين وظائفها وكفاءتها وقيمتها
              الجمالية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
