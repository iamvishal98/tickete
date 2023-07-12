import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import Help from "../../assets/help.svg";
import Left from "../../assets/CircleLeft.svg";
import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > 40) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div className={`header ${show}`}>
      <div className="left-arrow">
        <img src={Left} alt="left-nav" />
      </div>
      <div className="logo-icon">
        <img src={Logo} alt="logo-image" />
      </div>
      <div className="help-icon">
        <img src={Help} alt="help-image" />
      </div>
    </div>
  );
};

export default Header;
