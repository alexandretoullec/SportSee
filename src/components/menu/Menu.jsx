import React from "react";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="icons">
        <div className="icon">
          <img src="/yoga.svg" alt="yoga" />
        </div>
        <div className="icon">
          <img src="/swim.svg" alt="yoga" />
        </div>
        <div className="icon">
          <img src="/bike.svg" alt="yoga" />
        </div>
        <div className="icon">
          <img src="/muscle.svg" alt="yoga" />
        </div>
      </div>
      <div className="copyright">
        <span>Copiryght, SportSee 2020</span>
      </div>
    </div>
  );
};

export default Menu;
