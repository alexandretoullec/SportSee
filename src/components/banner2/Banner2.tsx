import React from "react";
import "./banner2.scss";

type Props = {
  id: number;
  userInfos: object[];
};

const Banner2 = (props: Props) => {
  // console.log(props.data.id);

  return (
    <div className="banner">
      <h1>
        Bonjour <span>{}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
};

export default Banner2;
