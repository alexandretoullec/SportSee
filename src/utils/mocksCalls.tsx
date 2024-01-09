import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mockedDatas/data";

export const mockUserInfos = async (id) => {
  try {
    const response = USER_MAIN_DATA.find((el) => el.id === id);
    console.log(response);
    return {
      error: "",
      firstName: response.userInfos.firstName,
      score: response.score || response.todayScore / 100,
      calorieCount: response.keyData.calorieCount,
      proteinCount: response.keyData.proteinCount,
      carbohydrateCount: response.keyData.carbohydrateCount,
      lipidCount: response.keyData.lipidCount,
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

export const mockUserActivties = async (id) => {
  try {
    const response = USER_ACTIVITY.find((el) => el.userId === id);
    console.log(response);
    return {
      error: "",
      sessions: response.sessions,
    };
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      sessions: "",
    };
  }
};

export const mockUserAverageSessions = async (id) => {
  try {
    const response = USER_AVERAGE_SESSIONS.find((el) => el.userId === id);
    console.log(response);
    return {
      error: "",
      sessions: response.sessions,
    };
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      sessions: "",
    };
  }
};

export const mockUserPerformance = async (id) => {
  try {
    const response = USER_PERFORMANCE.find((el) => el.userId === id);
    console.log(response);
    return {
      error: "",
      kind: response.kind,
      data: response.data,
    };
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      kind: "",
      data: "",
    };
  }
};
