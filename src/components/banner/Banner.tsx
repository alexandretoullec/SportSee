import React from "react";
import "./banner.scss";

type Props = {
  id: number;
  firstName: string;
  userInfos: object[];
};

const Banner = (props: Props) => {
  return (
    <div className="banner">
      <h1>
        Bonjour <span>{props.firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
};

export default Banner;
