import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Banner from "../../components/banner/Banner";
import BigChart from "../../components/bigChart/BigChart";
import SimpleChart from "../../components/simpleChart/SimpleChart";
import NutritionStats from "../../components/nutritionStats/NutritionStats";
import RadarChart from "../../components/radarChartComp/RadarChartComp";
import RoundedChart from "../../components/roundedChart/RoundedChart";
import SwitchDataButton from "../../components/switchDataButton/SwitchDataButton";

import { getData } from "../../utils/getData";

const User = () => {
  const [userMainData, setUserMainData] = useState([]);
  const [userActivityData, setUserActivityData] = useState([]);
  const [userAverageSessionsData, setUserAverageSessionsData] = useState([]);
  const [userPerformanceData, setUserPerformanceData] = useState([]);
  const [isLoadingMain, setIsLoadingMain] = useState(false);
  const [isLoadingActivity, setIsLoadingActivity] = useState(false);
  const [isLoadingAverage, setIsLoadingAverage] = useState(false);
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(false);
  const { currentId } = useParams();
  let performanceData = [];
  const idCurrent = parseInt(currentId);
  const [ismocked, setIsMocked] = useState(false);

  useEffect(() => {
    setIsLoadingMain(true); //load start
    const data = async () => {
      try {
        // console.log(idCurrent);

        const request = await getData("USER_MAIN_DATA", idCurrent, ismocked);
        setUserMainData(request);
      } catch {
        console.log("data error");
      } finally {
        setIsLoadingMain(false); //load end
      }
    };

    data();
  }, [idCurrent, ismocked]);

  //   console.log(userMainData);

  useEffect(() => {
    setIsLoadingActivity(true); //load start
    const data = async () => {
      try {
        const request = await getData("USER_ACTIVITY", idCurrent, ismocked);
        setUserActivityData(request);
      } catch {
        console.log("data error");
      } finally {
        setIsLoadingActivity(false); //load end
      }
    };
    data();
  }, [idCurrent, ismocked]);

  //   console.log(userActivityData);

  useEffect(() => {
    setIsLoadingAverage(true); //load start
    const data = async () => {
      try {
        const request = await getData(
          "USER_AVERAGE_SESSIONS",
          idCurrent,
          ismocked
        );
        setUserAverageSessionsData(request);
      } catch {
        console.log("data error");
      } finally {
        setIsLoadingAverage(false); //load end
      }
    };
    data();
  }, [idCurrent, ismocked]);

  console.log(userAverageSessionsData);

  useEffect(() => {
    setIsLoadingPerformance(true); //load start
    const data = async () => {
      try {
        const request = await getData("USER_PERFORMANCE", idCurrent, ismocked);
        setUserPerformanceData(request);
      } catch {
        console.log("data error");
      } finally {
        setIsLoadingPerformance(false); //load end
      }
    };
    data();
  }, [idCurrent, ismocked]);

  //   console.log(userPerformanceData);

  // if data load, render spinner(loading)
  if (
    isLoadingActivity ||
    isLoadingMain ||
    isLoadingAverage ||
    isLoadingPerformance
  ) {
    return <div>Loading...</div>;
  }

  const PerformanceKinds = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ];

  //format replace kind number to string(entitled)
  if (userPerformanceData && userPerformanceData.data) {
    PerformanceKinds.forEach((kind, index) => {
      userPerformanceData.data[index].kind = kind;
    });

    performanceData = [
      {
        value: 0,
        kind: "Intensité",
      },
      {
        value: 0,
        kind: "Vitesse",
      },
      {
        value: 0,
        kind: "Force",
      },
      {
        value: 0,
        kind: "Endurance",
      },
      {
        value: 0,
        kind: "Energie",
      },
      {
        value: 0,
        kind: "Cardio",
      },
    ];

    //allows the display according to the order of the titles : kinds
    userPerformanceData.data.forEach((data, index) => {
      switch (data.kind) {
        case "Intensité":
          performanceData[index].value = data.value;
          break;
        case "Vitesse":
          performanceData[index].value = data.value;
          break;
        case "Force":
          performanceData[index].value = data.value;
          break;
        case "Endurance":
          performanceData[index].value = data.value;
          break;
        case "Energie":
          performanceData[index].value = data.value;
          break;
        case "Cardio":
          performanceData[index].value = data.value;
          break;
        default:
          break;
      }
    });
  }

  return (
    <div>
      <SwitchDataButton
        isToggled={ismocked}
        onToggle={() => setIsMocked(!ismocked)}
        toggleText={ismocked ? "using mocked datas" : "using API datas"}
      />

      <div className="home">
        {userMainData && <Banner {...userMainData} />}
        <div className="mainGrid">
          <div className="box box1">
            {userActivityData && <BigChart {...userActivityData} />}
          </div>
          <div className="box box2">
            <SimpleChart data={userAverageSessionsData.sessions} />
          </div>

          <div className="box box3">
            {performanceData && <RadarChart data={performanceData} />}
          </div>

          <div className="box box4">
            {userMainData && <RoundedChart data={userMainData.score} />}
          </div>
          <div className="box box5">
            {userMainData && <NutritionStats data={userMainData} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
