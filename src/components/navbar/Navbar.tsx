import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="navigation">
        <Link to="/">Accueil</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/reglage">Réglage</Link>
        <Link to="/communaute">Communaute</Link>
      </div>
    </div>
  );
};

export default Navbar;
