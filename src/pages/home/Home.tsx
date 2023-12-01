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
  // mockerUserInfos();
  const { currentId } = useParams();
  const userId = currentId;
  const id = parseInt(currentId);
  const [error, setError] = useState(false);
  const [ismocked, setIsMocked] = useState(false);

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

  const {
    data: userDataResp,
    isLoading: isLoadingUser,
    error: isErrorUser,
  } = useFetch(`http://localhost:3000/user/${userId}`);
  const userData = userDataResp;

  // mainData2 && console.log(mainData2);

  /**
   * URL for the API endpoint (mocked for testing purposes).
   * @type {string}
   */

  const API_URL = "../../mockedDatas/data.js";

  /**
   * State variable for the main data of the current user.
   * @type {Object}
   * @property {string} id - The user ID.
   * @property {Object} userInfos - Information about the user.
   * @property {string} todayScore - Score for the current day.
   * @property {string} score - Overall score.
   * @property {Object} keyData - Additional key data.
   */

  const [currentMainData, setCurrentMainData] = useState({
    id: "",
    userInfos: {},
    todayScore: "",
    score: "",
    keyData: {},
  });

  /**
   * State variable for the activity data of the current user.
   * @type {Object}
   * @property {string} userId - The user ID.
   * @property {Array} sessions - Array of user sessions.
   */

  const [currentActivity, setCurrentActivity] = useState({
    userId: "",
    sessions: [],
  });

  /**
   * State variable for the average session data of the current user.
   * @type {Object}
   * @property {string} userId - The user ID.
   * @property {Array} sessions - Array of average sessions.
   */

  const [currentAverageSession, setCurrentAverageSession] = useState({
    userId: "",
    sessions: [],
  });

  /**
   * State variable for the performance data of the current user.
   * @type {Object}
   * @property {string} userId - The user ID.
   * @property {string} kind - The type of performance data.
   * @property {Array} data - Array of performance data.
   */

  const [currentUserPerformance, setCurrentUserPerformance] = useState({
    userId: "",
    kind: "",
    data: [],
  });

  // const response = await fetch(API_URL);
  // const data = await response.json();

  /**
   * Asynchronous function to fetch the main data of the current user.
   * @async
   * @function
   * @returns {Promise<Object>} A promise that resolves to the filtered main data.
   */

  // const getCurrentMainData = async () => {
  //   try {
  //     if (ismocked) {
  //       const dataMocked = USER_MAIN_DATA;

  //       const filteredDataMain = dataMocked.find((data) => data.id === id);
  //       return filteredDataMain;
  //     } else {
  //       const response = await fetch(`http://localhost:3000/user/${userId}`);

  //       const mainDataAPI = await response.json();

  //       return mainDataAPI;
  //     }
  //   } catch (error) {
  //     console.error("Error fetching main data:", error);
  //     setError(true);
  //   }
  // };
  /**
   * Asynchronous function to fetch the activity data of the current user.
   * @async
   * @function
   * @returns {Promise<Object>} A promise that resolves to the filtered activity data.
   */

  const getCurrentActivity = async () => {
    try {
      const data = USER_ACTIVITY;
      const filteredDataActivity = data.find((data) => data.userId === id);
      return filteredDataActivity;
    } catch (error) {
      console.error("Error fetching user activity data:", error);
      setError(true);
    }
  };

  const getCurrentAverageSesson = async () => {
    try {
      const data = USER_AVERAGE_SESSIONS;
      const filteredDataAverage = data.find((data) => data.userId === id);
      return filteredDataAverage;
    } catch (error) {
      console.error("Error fetching user average session data:", error);
      setError(true);
    }
  };

  const getCurentUserPerformance = async () => {
    try {
      const data = USER_PERFORMANCE;
      const filterUserPerformance = data.find((data) => data.userId === id);

      return filterUserPerformance;
    } catch (error) {
      console.error("Error fetching user average session data:", error);
      setError(true);
    }
  };

  /**
   * useEffect hook to fetch data when the component mounts.
   * @effect
   * @function
   * @returns {void}
   */

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const mainData = await getCurrentMainData();
        // setCurrentMainData(mainData);
        // console.log(mainData.data.userInfos);
        // const activityData = await getCurrentActivity();
        // setCurrentActivity(activityData);
        // const averageSessionData = await getCurrentAverageSesson();
        // setCurrentAverageSession(averageSessionData);
        // const userPerformanceData = await getCurentUserPerformance();
        // setCurrentUserPerformance(userPerformanceData);
      } catch (error) {
        console.log("Error fetching data : ", error);
        setError(true);
      }
    };
    fetchData();
  }, []);

  /**
   * Render method for the Home component.
   * @returns {JSX.Element} JSX element representing the rendered Home component.
   */

  return (
    <div className="home">
      <div className="profilCard-container">
        <Link to={`/profil/${users[0].id}`} className="profilCard">
          <img src={users[0].userInfos.picture} alt="profilePhoto" />
          <div className="profileInfos">
            <p>{users[0].userInfos.firstName}</p>
            <p>{users[0].userInfos.lastName}</p>
          </div>
        </Link>
        <Link to={`/profil/${users[1].id}`} className="profilCard">
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
