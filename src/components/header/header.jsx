import React from "react";
import Logo from "../../asset/icon/logo.svg";
import Menu from "../../asset/icon/menu.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="WeatherBot" className="logo" />
      </div>
      <div className="menu-container">
        <img src={Menu} alt="Menu" className="menu" />
      </div>
    </header>
  );
};

export default Header;
