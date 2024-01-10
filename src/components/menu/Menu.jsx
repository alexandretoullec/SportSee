import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="icons">
        <Link to="/" className="icon">
          <img src="/yoga.svg" alt="yoga" />
        </Link>
        <Link to="/" className="icon">
          <img src="/swim.svg" alt="yoga" />
        </Link>
        <Link to="/" className="icon">
          <img src="/bike.svg" alt="yoga" />
        </Link>
        <Link to="/" className="icon">
          <img src="/muscle.svg" alt="yoga" />
        </Link>
      </div>
      <div className="copyright">
        <span>Copiryght, SportSee 2020</span>
      </div>
    </div>
  );
};

export default Menu;
