import axios from "axios";

const baseURL = "http://localhost:3000/";

export const getUserInfos = async (id) => {
  try {
    const response = await axios.get(`${baseURL}user/${id}`);
    //  console.log("promesse UsersInfos :",response)
    return {
      error: "",
      firstName: response.data.data.userInfos.firstName,
      score: response.data.data.score || response.data.data.todayScore,
      calorieCount: response.data.data.keyData.calorieCount,
      proteinCount: response.data.data.keyData.proteinCount,
      carbohydrateCount: response.data.data.keyData.carbohydrateCount,
      lipidCount: response.data.data.keyData.lipidCount,
    };
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      firstName: "",
      score: "",
      calorieCount: "",
      proteinCount: "",
      carbohydrateCount: "",
      lipidCount: "",
    };
  }
};

export const getUserActivties = async (id) => {
  try {
    const response = await axios.get(`${baseURL}user/${id}/activity`);

    return {
      error: "",
      sessions: response.data.data.sessions,
    };
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      sessions: "",
    };
  }
};

export const getUserAverageSession = async (id) => {
  try {
    const response = await axios.get(`${baseURL}user/${id}/average-sessions`);

    return {
      error: "",
      sessions: response.data.data.sessions,
    };
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      sessions: "",
    };
  }
};

export const getUserPerformance = async (id) => {
  try {
    const response = await axios.get(`${baseURL}user/${id}/performance`);

    return {
      error: "",
      kind: response.data.data.kind,
      data: response.data.data.data,
    };
  } catch (e) {
    console.log(e);
    return {
      error: "",
      kind: "",
      data: "",
    };
  }
};
