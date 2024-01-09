import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./home.scss";
import { useFetch } from "../../utils/hooks";
import ProfilCard from "../../components/profilCard/profilCard";
import { Link } from "react-router-dom";

import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../../mockedDatas/data";

/**
 * Home component representing the main dashboard of the application.
 * @component
 * @returns {JSX.Element} JSX element representing the Home component.
 */

const Home = () => {
  const users = [
    {
      id: 12,
      userInfos: {
        firstName: "Karl",
        lastName: "Dovineau",
        age: 31,
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
      },
      todayScore: 12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
    {
      id: 18,
      userInfos: {
        firstName: "Cecilia",
        lastName: "Ratorez",
        age: 34,
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
      },
      score: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
      },
    },
  ];

  /**
   * Render method for the Home component.
   * @returns {JSX.Element} JSX element representing the rendered Home component.
   */

  return (
    <div className="home">
      <div className="profilCard-container">
        <Link to={`/user/${users[0].id}`} className="profilCard">
          <img src={users[0].userInfos.picture} alt="profilePhoto" />
          <div className="profileInfos">
            <p>{users[0].userInfos.firstName}</p>
            <p>{users[0].userInfos.lastName}</p>
          </div>
        </Link>
        <Link to={`/user/${users[1].id}`} className="profilCard">
          <img src={users[1].userInfos.picture} alt="profilePhoto" />
          <div className="profileInfos">
            <p>{users[1].userInfos.firstName}</p>
            <p>{users[1].userInfos.lastName}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
