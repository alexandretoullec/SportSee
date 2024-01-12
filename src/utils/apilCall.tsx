import axios from "axios";

import {
  UserInfoModelisation,
  UserActivitiesModelisation,
  UserAverageSessionModelisation,
  UserPerformanceModelisation,
} from "./modelisation";

const baseURL = "http://localhost:3000/";

/**
 * Retrieves user information based on the provided user ID.
 * @param {string} id - User ID
 * @returns {Promise<object>} - User information or error details
 */

export const getUserInfos = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}user/${id}`);
    const userData = new UserInfoModelisation(response.data.data);

    return userData;
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

    const activitiesData = new UserActivitiesModelisation(response.data.data);

    return activitiesData;
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

    const averageSessionsData = new UserAverageSessionModelisation(
      response.data.data
    );

    return averageSessionsData;
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

    const performanceData = new UserPerformanceModelisation(response.data.data);

    return performanceData;
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
