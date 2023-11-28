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

const Home = () => {
  // mockerUserInfos();
  const { currentId } = useParams();
  const id = parseInt(currentId);

  const API_URL = "../../mockedDatas/data.js";

  const [currentMainData, setCurrentMainData] = useState({
    id: "",
    userInfos: {},
    todayScore: "",
    score: "",
    keyData: {},
  });
  const [currentActivity, setCurrentActivity] = useState({
    userId: "",
    sessions: [],
  });
  const [currentAverageSession, setCurrentAverageSession] = useState({
    userId: "",
    sessions: [],
  });
  const [currentUserPerformance, setCurrentUserPerformance] = useState({
    userId: "",
    kind: "",
    data: [],
  });

  const getCurrentMainData = async () => {
    // const response = await fetch(API_URL);
    const data = USER_MAIN_DATA;
    const filteredDataMain = data.find((data) => data.id === id);
    return filteredDataMain;
  };

  const getCurrentActivity = async () => {
    const data = USER_ACTIVITY;
    const filteredDataActivity = data.find((data) => data.userId === id);
    return filteredDataActivity;
  };
  const getCurrentAverageSesson = async () => {
    const data = USER_AVERAGE_SESSIONS;
    const filteredDataAverage = data.find((data) => data.userId === id);
    return filteredDataAverage;
  };

  const getCurentUserPerformance = async () => {
    const data = USER_PERFORMANCE;
    const filterUserPerformance = data.find((data) => data.userId === id);

    return filterUserPerformance;
  };

  useEffect(() => {
    getCurrentMainData().then((data) => setCurrentMainData(data));
    getCurrentActivity().then((data) => setCurrentActivity(data));
    getCurrentAverageSesson().then((data) => setCurrentAverageSession(data));
    getCurentUserPerformance().then((data) => setCurrentUserPerformance(data));
  }, []);

  console.log(currentMainData.score);

  return (
    <div className="home">
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
