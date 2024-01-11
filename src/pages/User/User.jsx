import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./user.scss";
import Banner from "../../components/banner/Banner";
import BigChart from "../../components/bigChart/BigChart";
import SimpleChart from "../../components/simpleChart/SimpleChart";
import NutritionStats from "../../components/nutritionStats/NutritionStats";
import RadarChart from "../../components/radarChartComp/RadarChartComp";
import RoundedChart from "../../components/roundedChart/RoundedChart";
import SwitchDataButton from "../../components/switchDataButton/SwitchDataButton";
import Loader from "../../components/loader/Loader";

import { getData } from "../../utils/getData";

/**
 * User Component
 * @component
 * @description React component for displaying user data.
 * @returns {JSX.Element} JSX element representing the User component.
 */

const User = () => {
  //manage local state components
  const [userMainData, setUserMainData] = useState([]);
  const [userActivityData, setUserActivityData] = useState([]);
  const [userAverageSessionsData, setUserAverageSessionsData] = useState([]);
  const [userPerformanceData, setUserPerformanceData] = useState([]);
  //manage loading boolean
  const [isLoadingMain, setIsLoadingMain] = useState(false);
  const [isLoadingActivity, setIsLoadingActivity] = useState(false);
  const [isLoadingAverage, setIsLoadingAverage] = useState(false);
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(false);
  //manage error boolean
  const [errorMain, setErrorMain] = useState(false);
  const [errorActivity, setErrorActivity] = useState(false);
  const [errorAverage, setErrorAverage] = useState(false);
  const [errorPerformance, setErrorPerformance] = useState(false);

  // retrieve ID from URL
  const { currentId } = useParams();
  let performanceData = [];
  const idCurrent = parseInt(currentId);

  // allow to choose the origin of datas
  const [ismocked, setIsMocked] = useState(false);

  useEffect(() => {
    setIsLoadingMain(true); //load start
    const data = async () => {
      try {
        const request = await getData("USER_MAIN_DATA", idCurrent, ismocked);
        if (request.error === "Network Error") {
          console.log(request.error);
          setErrorMain(true);
        } else {
          console.log(request);
          setUserMainData(request);
          setErrorMain(false);
        }
      } catch (error) {
        console.error("Error fetching user main data:", error);
        setErrorMain(true);
      } finally {
        setIsLoadingMain(false);
      }
    };

    data();
  }, [idCurrent, ismocked]);

  useEffect(() => {
    setIsLoadingActivity(true); //load start
    const data = async () => {
      try {
        const request = await getData("USER_ACTIVITY", idCurrent, ismocked);
        if (request.error === "Network Error") {
          console.log(request.error);
          setErrorActivity(true);
        } else {
          setUserActivityData(request);
        }
      } catch {
        console.log("data error");
        setErrorActivity(true);
      } finally {
        setIsLoadingActivity(false); //load end
      }
    };
    data();
  }, [idCurrent, ismocked]);

  useEffect(() => {
    setIsLoadingAverage(true); //load start
    const data = async () => {
      try {
        const request = await getData(
          "USER_AVERAGE_SESSIONS",
          idCurrent,
          ismocked
        );
        if (request.error === "Network Error") {
          console.log(request.error);
          setErrorAverage(true);
        } else {
          setUserAverageSessionsData(request);
        }
      } catch {
        console.log("data error");
        setErrorAverage(true);
      } finally {
        setIsLoadingAverage(false); //load end
      }
    };
    data();
  }, [idCurrent, ismocked]);

  // console.log(userAverageSessionsData);

  useEffect(() => {
    setIsLoadingPerformance(true); //load start
    const data = async () => {
      try {
        const request = await getData("USER_PERFORMANCE", idCurrent, ismocked);
        if (request.error === "Network Error") {
          console.log(request.error);
          setErrorPerformance(true);
        } else {
          setUserPerformanceData(request);
        }
      } catch {
        console.log("data error");
        setErrorPerformance(true);
      } finally {
        setIsLoadingPerformance(false); //load end
      }
    };
    data();
  }, [idCurrent, ismocked]);

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
      {isLoadingMain ||
      isLoadingActivity ||
      isLoadingAverage ||
      isLoadingPerformance ? (
        <Loader />
      ) : (
        <>
          {errorMain ? (
            <p className="error">Error fetching main data</p>
          ) : errorActivity ? (
            <p className="error">Error fetching activity data</p>
          ) : errorAverage ? (
            <p className="error">Error fetching average data</p>
          ) : errorPerformance ? (
            <p className="error">Error fetching performance data</p>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};
export default User;
