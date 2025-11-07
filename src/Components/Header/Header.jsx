import React from "react";
import "./header.css";
import { PiGlobeSimpleBold } from "react-icons/pi";


const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        {/*logo */}
        <div className="header_logo">
          <img src="/Images/logo.png" alt="لوجو" />
        </div>

        {/*language */}
        <div className="header_lang">
          <PiGlobeSimpleBold />
          <select className="lang_select">
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );
};
export default Header;
