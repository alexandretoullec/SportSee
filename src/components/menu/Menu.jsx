import React from "react";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="icons">
        <a className="icon">
          <img src="/yoga.svg" alt="yoga" />
        </a>
        <a className="icon">
          <img src="/swim.svg" alt="yoga" />
        </a>
        <a className="icon">
          <img src="/bike.svg" alt="yoga" />
        </a>
        <a className="icon">
          <img src="/muscle.svg" alt="yoga" />
        </a>
      </div>
      <div className="copyright">
        <span>Copiryght, SportSee 2020</span>
      </div>
    </div>
  );
};

export default Menu;
