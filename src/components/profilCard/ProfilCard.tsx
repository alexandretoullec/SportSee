import React, { Children } from "react";
import "./profilCard.scss";
import { Link } from "react-router-dom";

const ProfilCard = ({ src, firstName, lastName, key }) => {
  console.log(key);

  return (
    <Link to={`/profil/:${key}`} key={key} className="profilCard">
      <img src={src} alt="profilePhoto" />
      <div className="profileInfos">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    </Link>
  );
};

export default ProfilCard;
