import React from "react";
import Logo from "../../assets/Logo";
import Insta from "../../assets/InstagramLogo.svg";
import Fb from "../../assets/FacebookLogo.svg";
import Twitter from "../../assets/TwitterLogo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="max-width-container">
        <div className="footer-logo">
          <Logo />
        </div>
        <hr />
        <div className="footer-links">
          <div className="left">
            <ul>
              <li> &copy; Ticket Inc</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cancellation policy</li>
            </ul>
          </div>
          <div className="right">
            <img src={Insta} alt="InstagramLogo" />
            <img src={Fb} alt="FacebookLogo" />
            <img src={Twitter} alt="twitterLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
