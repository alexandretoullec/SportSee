import React, { useEffect, useState } from "react";
import "./profil.scss";
import { useFetch } from "../../utils/hooks";

import SimpleChart from "../../components/simpleChart/SimpleChart";
import Banner from "../../components/banner/Banner";
import BigChart from "../../components/bigChart/BigChart";
import NutritionStats from "../../components/nutritionStats/NutritionStats";
import RadarChart from "../../components/radarChartComp/RadarChartComp";
import RoundedChart from "../../components/roundedChart/RoundedChart";
import { useParams } from "react-router-dom";

const Profil = () => {
  const { currentId } = useParams();
  const userId = currentId;
  // const { data, isLoading } = useFetch(`http://localhost:3000/user/${userId}`);
  // const [userData, setUserData] = useState(null);
  // const [userActivity, setUserActivity] = useState(null);
  // const [userAverageSession, setUserAverageSession] = useState(null);
  // const [userPerf, setUserPerf] = useState(null);

  const [ismocked, setIsMocked] = useState(false);

  const toggmeMockedData = () => {
    ismocked ? setIsMocked(false) : setIsMocked(true);
  };

  const {
    data: userDataResp,
    isLoading: isLoadingUser,
    error: isErrorUser,
  } = useFetch(`http://localhost:3000/user/${userId}`);
  const userData = userDataResp;

  const {
    data: activityDataResp,
    isLoading: isLoadingActivity,
    error: isErrorActivity,
  } = useFetch(`http://localhost:3000/user/${userId}/activity`);

  const userActivity = activityDataResp;

  const {
    data: averageSessionDataResp,
    isLoading: isLoadingActivityAverageSession,
    error: isErrorAverageSession,
  } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);

  const userAverageSession = averageSessionDataResp;

  const {
    data: performanceDataResp,
    isLoading: isLoadingPerf,
    error: isErrorAPerf,
  } = useFetch(`http://localhost:3000/user/${userId}/performance`);

  const userPerf = performanceDataResp;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const userDataResponse = await fetch(
  //       //   `http://localhost:3000/user/${userId}`
  //       // );
  //       // const userData = await userDataResponse.json();
  //       // setUserData(userData);
  //       // const activityDataResponse = await fetch(
  //       //   `http://localhost:3000/user/${userId}/activity`
  //       // );
  //       // const activityData = await activityDataResponse.json();
  //       // setUserActivity(activityData);
  //       // const averageSessionDataResponse = await fetch(
  //       //   `http://localhost:3000/user/${userId}/average-sessions`
  //       // );
  //       // const averageSessionData = await averageSessionDataResponse.json();
  //       // setUserAverageSession(averageSessionData);
  //       // const perfDataResponse = await fetch(
  //       //   `http://localhost:3000/user/${userId}/performance`
  //       // );
  //       // const perfData = await perfDataResponse.json();
  //       // setUserPerf(perfData);
  //       // Similarly, handle other fetch requests
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle error, show a message, etc.
  //     }
  //   };

  //   fetchData();
  // }, [userId]);

  return (
    <div>
      {userData && userActivity && userAverageSession && userPerf && (
        <div className="home">
          <button onClick={toggmeMockedData}>
            mockedData? : {ismocked.toString()}
          </button>

          <Banner {...userData.data} />
          <div className="mainGrid">
            <div className="box box1">
              <BigChart {...userActivity.data} />
            </div>
            <div className="box box2">
              <SimpleChart {...userAverageSession.data} />
            </div>
            <div className="box box3">
              <RadarChart {...userPerf.data} />
            </div>
            <div className="box box4">
              <RoundedChart {...userData.data} />
            </div>
            <div className="box box5">
              <NutritionStats {...userData.data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
