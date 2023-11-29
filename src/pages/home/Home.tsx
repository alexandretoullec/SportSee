import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./home.scss";
import Banner from "../../components/banner/Banner";
import BigChart from "../../components/bigChart/BigChart";
import SimpleChart from "../../components/simpleChart/SimpleChart";
import RadarChart from "../../components/radarChartComp/RadarChartComp";
import RoundedChart from "../../components/roundedChart/RoundedChart";
import NutritionStats from "../../components/nutritionStats/NutritionStats";
import { mockerUserInfos } from "../../utils/mockCall";
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
  const [ismocked, setIsMocked] = useState(true);

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

  const getCurrentMainData = async () => {
    try {
      if (ismocked) {
        const data = USER_MAIN_DATA;

        const filteredDataMain = data.find((data) => data.id === id);
        return filteredDataMain;
      } else {
        const response = await fetch(`http://localhost:3000/user/${userId}`);

        const mainDataAPI = await response.json();
        console.log(mainDataAPI);

        return mainDataAPI;
      }
    } catch (error) {
      console.error("Error fetching main data:", error);
      setError(true);
    }
  };

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
        const mainData = await getCurrentMainData();
        setCurrentMainData(mainData);

        const activityData = await getCurrentActivity();
        setCurrentActivity(activityData);

        const averageSessionData = await getCurrentAverageSesson();
        setCurrentAverageSession(averageSessionData);

        const userPerformanceData = await getCurentUserPerformance();
        setCurrentUserPerformance(userPerformanceData);
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

  const toggmeMockedData = () => {
    ismocked ? setIsMocked(false) : setIsMocked(true);
  };

  if (error) {
    return <span>Oups il y'a eu une erreur</span>;
  }
  console.log(currentMainData);

  return (
    <div className="home">
      <button onClick={toggmeMockedData}>
        mockedData? : {ismocked.toString()}
      </button>
      <Banner {...currentMainData} />
      <div className="mainGrid">
        <div className="box box1">
          <BigChart {...currentActivity} />
        </div>
        <div className="box box2">
          <SimpleChart {...currentAverageSession} />
        </div>
        <div className="box box3">
          <RadarChart {...currentUserPerformance} />
        </div>
        <div className="box box4">
          <RoundedChart {...currentMainData} />
        </div>
        <div className="box box5">
          <NutritionStats {...currentMainData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
