import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { PiEnvelopeSimpleLight, PiGlobeSimpleBold } from "react-icons/pi";
import { FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer_container">
        {/* القسم الرئيسي */}
        <div className="footer_content">
          {/* عن الشركة */}
          <div className="footer_col">
            {/*logo */}
            <div className="header_logo">
              <img className="footer_img" src="./Images/logo.png" alt="لوجو" />
            </div>
            <p>
              ام فورس رائدة في مجال البناء والمقاولات   
            </p>
            <div className="footer_social">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="footer_col">
            <h4>روابط سريعة</h4>
            <ul>
              <li>الرئيسية</li>
              <li>مشاريعنا</li>
              <li>خدماتنا</li>
              <li>التوظيف</li>
              <li>عرض السعر</li>
            </ul>
          </div>

          {/* خدماتنا */}
          <div className="footer_col">
            <h4>خدماتنا</h4>
            <ul>
              <li>تسجيل الشركات</li>
              <li>الملفات التجاريه</li>
              <li>طلب الخدمات</li>
              <li>التقييمات والمراجعات</li>
              <li>الإعلانات المميزة</li>
              <li>الدعم الفني</li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div className="footer_col">
            <h4>تواصل معنا</h4>
            <ul className="footer_contact">
              <li>
                <FiPhone /> +966590133444
              </li>
              <li>
                <PiEnvelopeSimpleLight /> info@mforce.com.sa
              </li>
              <li>
                <FiMapPin /> الرياض، المملكة العربية السعودية
              </li>
              <li>
                <PiGlobeSimpleBold /> www.mforce.com.sa
              </li>
            </ul>
            <h4>ساعات العمل</h4>
            <ul>
              <li>الأحد - الخميس: 8:00 ص - 6:00 م</li>
              <li>الجمعة - السبت: عطلة نهاية الأسبوع</li>
            </ul>
          </div>
        </div>

        {/* الحقوق */}
        <div className="footer_bottom">
          <p>القوة المتقنة للمقاولات, جميع الحقوق محفوظة 2025©</p>
          <div className="footer_links">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">شروط الإستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
