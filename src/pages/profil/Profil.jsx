import { useState } from "react";
import "./profil.scss";
import { useFetch } from "../../utils/hooks";

import SimpleChart from "../../components/simpleChart/SimpleChart";
import Banner from "../../components/banner/Banner";
import BigChart from "../../components/bigChart/BigChart";
import NutritionStats from "../../components/nutritionStats/NutritionStats";
import RadarChart from "../../components/radarChartComp/RadarChartComp";
import RoundedChart from "../../components/roundedChart/RoundedChart";
import SwitchDataButton from "../../components/switchDataButton/SwitchDataButton";
import { useParams } from "react-router-dom";

const Profil = () => {
  const { currentId } = useParams();
  const userId = currentId;
  const [ismocked, setIsMocked] = useState(false);

  // const toggleMockedData = () => {
  //   ismocked ? setIsMocked(false) : setIsMocked(true);
  // };

  const {
    data: userDataResp,
    isLoading: isLoadingUser,
    error: isErrorUser,
  } = useFetch(`http://localhost:3000/user/${userId}`, ismocked);
  const userData = userDataResp;

  const {
    data: activityDataResp,
    isLoading: isLoadingActivity,
    error: isErrorActivity,
  } = useFetch(`http://localhost:3000/user/${userId}/activity`, ismocked);

  const userActivity = activityDataResp;

  const {
    data: averageSessionDataResp,
    isLoading: isLoadingActivityAverageSession,
    error: isErrorAverageSession,
  } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`,
    ismocked
  );

  const userAverageSession = averageSessionDataResp;

  const {
    data: performanceDataResp,
    isLoading: isLoadingPerf,
    error: isErrorAPerf,
  } = useFetch(`http://localhost:3000/user/${userId}/performance`, ismocked);

  const userPerf = performanceDataResp;
  console.log(userData);
  console.log(userAverageSession);

  return !ismocked ? (
    <div>
      {/* <button onClick={toggleMockedData}>
        Toggle Mocked Data: {ismocked.toString()}
      </button> */}
      <SwitchDataButton
        isToggled={ismocked}
        onToggle={() => setIsMocked(!ismocked)}
        toggleText={ismocked ? "using mocked datas" : "using API datas"}
      />
      {userData && userActivity && userAverageSession && userPerf && (
        <div className="home">
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

      {(isLoadingUser ||
        isLoadingActivity ||
        isLoadingActivityAverageSession ||
        isLoadingPerf) && <p>Loading...</p>}

      {(isErrorUser ||
        isErrorActivity ||
        isErrorAverageSession ||
        isErrorAPerf) && <p>Error fetching data </p>}
    </div>
  ) : (
    userData && (
      <div>
        <SwitchDataButton
          isToggled={ismocked}
          onToggle={() => setIsMocked(!ismocked)}
          toggleText={ismocked ? "using mocked datas" : "using API datas"}
        />
        <div className="home">
          {userData && <Banner {...userData} />}
          {/* <div className="mainGrid">
          <div className="box box1">
            {userActivity && <BigChart {...userActivity} />}
          </div>
          <div className="box box2">
            {userAverageSession && <SimpleChart {...userAverageSession} />}
          </div>
          <div className="box box3">
            {userPerf && <RadarChart {...userPerf} />}
          </div>
          <div className="box box4">
            {userData && <RoundedChart {...userData} />}
          </div>
          <div className="box box5">
            {userData && <NutritionStats {...userData} />}
          </div>
        </div> */}
        </div>
      </div>
    )
  );
};

export default Profil;

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
