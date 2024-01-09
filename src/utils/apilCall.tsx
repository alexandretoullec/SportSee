import axios from "axios";

const baseURL = "http://localhost:3000/";

/**
 * Retrieves user information based on the provided user ID.
 * @param {string} id - User ID
 * @returns {Promise<object>} - User information or error details
 */

type UserInfoResponse = {
  error: string;
  firstName: string;
  score: string;
  calorieCount: string;
  proteinCount: string;
  carbohydrateCount: string;
  lipidCount: string;
};

export const getUserInfos = async (id: string): Promise<UserInfoResponse> => {
  try {
    const response = await axios.get(`${baseURL}user/${id}`);

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
      error: e.message || "Unknown error",

      firstName: "",
      score: "",
      calorieCount: "",
      proteinCount: "",
      carbohydrateCount: "",
      lipidCount: "",
    };
  }
};

/**
 * Retrieves user activities based on the provided user ID.
 * @param {string} id - User ID
 * @returns {Promise<object>} - User activities or error details
 */

type UserActivitiesResponse = {
  error: string;
  sessions: string | ""; // Adjust the type based on the actual data type
};

export const getUserActivties = async (
  id: string
): Promise<UserActivitiesResponse> => {
  try {
    const response = await axios.get(`${baseURL}user/${id}/activity`);

    return {
      error: "",
      sessions: response.data.data.sessions,
    };
  } catch (e) {
    console.log(e);
    return {
      error: e.message || "Unknown error",
      sessions: "",
    };
  }
};

/**
 * Retrieves user's average session information based on the provided user ID.
 * @param {string} id - User ID
 * @returns {Promise<object>} - Average session details or error details
 */

type UserAverageSession = {
  error: string;
  sessions: string;
};

export const getUserAverageSession = async (
  id: string
): Promise<UserAverageSession> => {
  try {
    const response = await axios.get(`${baseURL}user/${id}/average-sessions`);

    return {
      error: "",
      sessions: response.data.data.sessions,
    };
  } catch (e) {
    console.log(e);
    return {
      error: e.message || "Unknown error",
      sessions: "",
    };
  }
};

/**
 * Retrieves user performance information based on the provided user ID.
 * @param {string} id - User ID
 * @returns {Promise<object>} - User performance details or error details
 */

type UserPerformance = {
  error: string;
  kind: string;
  data: {
    value: number;
    kind: number;
  };
};

export const getUserPerformance = async (
  id: string
): Promise<UserPerformance> => {
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
      error: e.message || "Unknown error",
      kind: "",
      data: {
        value: 0,
        kind: 0,
      },
    };
  }
};
