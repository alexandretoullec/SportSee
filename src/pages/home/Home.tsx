import React, { useEffect } from "react";
import "./home.scss";
import Banner from "../../components/banner/Banner";
import BigChart from "../../components/bigChart/BigChart";
import SimpleChart from "../../components/simpleChart/SimpleChart";
import RadarChart from "../../components/radarChartComp/RadarChartComp";
import RoundedChart from "../../components/roundedChart/RoundedChart";
import NutritionStats from "../../components/nutritionStats/NutritionStats";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../../mockedDatas/data";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="mainGrid">
        <div className="box box1">
          <BigChart {...USER_ACTIVITY} />
        </div>
        <div className="box box2">
          <SimpleChart {...USER_AVERAGE_SESSIONS} />
        </div>
        <div className="box box3">
          <RadarChart {...USER_PERFORMANCE} />
        </div>
        <div className="box box4">
          <RoundedChart {...USER_MAIN_DATA} />
        </div>
        <div className="box box5">
          <NutritionStats {...USER_MAIN_DATA} />
        </div>
      </div>
    </div>
  );
};

export default Home;
