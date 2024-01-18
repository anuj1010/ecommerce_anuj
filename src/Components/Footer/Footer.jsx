import React from "react";
import "./Footer.css";
import FooterLogo from "../Assets/logo.png";
import Instagram from "../Assets/instagram_icon.png";
import Whatsapp from "../Assets/whatsapp_icon.png";
import Pintrest from "../Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={FooterLogo} />
        <p>Created by Anuj</p>
      </div>
      <ul className="footerLinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocialIcons">
        <div className="socialIconContainer">
          <img src={Instagram} />
        </div>
        <div className="socialIconContainer">
          <img src={Pintrest} />
        </div>
        <div className="socialIconContainer">
          <img src={Whatsapp} />
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
