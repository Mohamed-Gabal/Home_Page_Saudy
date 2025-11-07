import React from "react";
import "./offerPage.css";

const OfferPage = () => {
  return (
    <section className="offer_page">
      <div className="offer_page_container">
        <div className="offer_page_top">
          <h2>عرض سعر فوري مجاني</h2>
          <p>
            أجب على بعض الأسئلة السريعة للحصول على تقدير لتكلفة المشروع. سيتواصل فريقنا معك قريباً بعرض سعر تفصيلي.
          </p>
        </div>

        {/* الكارد الأبيض */}
        <div className="offer_page_box">
          <div className="offer_page_botten_main">
            <h3>املأ البيانات</h3>
            <p>جميع المعلومات سرية وآمنة</p>
          </div>

          {/* نوع الخدمة */}
          <div className="offer_page_group">
            <label>نوع الخدمة المطلوبة</label>
            <div className="offer_page_checkboxes">
              <label><input type="radio" name="serviceType"/> البناء والتشييد</label>
              <label><input type="radio" name="serviceType"/> أعمال التشطيبات</label>
              <label><input type="radio" name="serviceType"/> الترميم والتجديد</label>
              <label><input type="radio" name="serviceType"/> إدارة المشاريع</label>
              <label><input type="radio" name="serviceType"/> أخرى</label>
            </div>
          </div>

          {/* البريد الإلكتروني */}
          <div className="offer_page_group">
            <label>البريد الإلكتروني (اختياري)</label>
            <input type="email" placeholder="أدخل بريدك الإلكتروني" />
          </div>

          {/* رقم الهاتف */}
          <div className="offer_page_group">
            <label>رقم الهاتف للتواصل عبر WhatsApp</label>
            <input type="tel" placeholder="أدخل رقم جوالك" />
          </div>

          {/* الزرار */}
          <button className="offer_page_btn">احصل على عرض سعر الآن</button>

          {/* النص الختامي */}
          <p className="offer_page_note">
            انضم إلى عملائنا الكرام الذين يثقون في M-Force لتنفيذ مشاريع عالية الجودة من التصميم إلى الإنجاز.
          </p>
        </div>
      </div>
    </section>
  );
};
export default OfferPage;
