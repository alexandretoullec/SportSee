import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mockedDatas/data";

/**
 * Represents the structure of user information.
 */
type MockedUserInfos = {
  error: string;
  firstName: string;
  score: string;
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

/**
 * Mock function to retrieve user information based on the provided user ID.
 *
 * @param {number} id - User ID.
 * @returns {Promise<MockedUserInfos>} - Mocked user information or error details.
 */

export const mockUserInfos = async (id: number): Promise<MockedUserInfos> => {
  try {
    const response = USER_MAIN_DATA.find((el) => el.id === id);

    if (response) {
      console.log(response);

      return {
        error: "",
        firstName: response.userInfos.firstName,
        score:
          typeof response.score === "number"
            ? response.score.toString()
            : (response.todayScore / 100).toString(),
        calorieCount: response.keyData.calorieCount,
        proteinCount: response.keyData.proteinCount,
        carbohydrateCount: response.keyData.carbohydrateCount,
        lipidCount: response.keyData.lipidCount,
      };
    } else {
      throw new Error("User not found");
    }
  } catch (e) {
    console.log(e);

    return {
      error: "error",
      firstName: "",
      score: "",
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    };
  }
};

/**
 * Mock function to retrieve user activities based on the provided user ID.
 *
 * @param {number} id - User ID.
 * @returns {Promise<MockedUserActivities>} - Mocked user activities or error details.
 */

type MockedUserActivities = {
  error: string;
  sessions: Session[];
};

// Assuming a structure for sessions
type Session = {
  day: string;
  kilogram: number;
  calories: number;
};

export const mockUserActivties = async (
  id: number
): Promise<MockedUserActivities> => {
  try {
    const response = USER_ACTIVITY.find((el) => el.userId === id);

    if (response) {
      return {
        error: "",
        sessions: response.sessions,
      };
    } else {
      throw new Error("User activity not found");
    }
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      sessions: [],
    };
  }
};

/**
 * Represents the structure of user average sessions.
 */

type AverageSession = {
  day: number;
  sessionLength: number;
};
type MockedUserAverageSessions = {
  error: string;
  sessions: AverageSession[];
};

/**
 * Mock function to retrieve user's average session information based on the provided user ID.
 *
 * @param {number} id - User ID.
 * @returns {Promise<MockedUserAverageSessions>} - Mocked average session details or error details.
 */
export const mockUserAverageSessions = async (
  id: number
): Promise<MockedUserAverageSessions> => {
  try {
    const response = USER_AVERAGE_SESSIONS.find((el) => el.userId === id);

    if (response) {
      return {
        error: "",
        sessions: response.sessions,
      };
    } else {
      throw new Error("User average sessions not found");
    }
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      sessions: [],
    };
  }
};

interface PerformanceData {
  value: number;
  kind: number;
}

/**
 * Represents the structure of user performance.
 */
interface UserPerformance {
  userId: number;
  kind: {
    [key: number]: string;
  };
  data: PerformanceData[];
}

/**
 * Represents the structure of mocked user performance.
 */
interface MockedUserPerformance {
  error: string;
  kind: {
    [key: number]: string;
  };
  data: PerformanceData[];
}

/**
 * Mock function to retrieve user performance information based on the provided user ID.
 *
 * @param {number} id - User ID.
 * @returns {Promise<MockedUserPerformance>} - Mocked user performance details or error details.
 */
export const mockUserPerformance = async (
  id: number
): Promise<MockedUserPerformance> => {
  try {
    const response = USER_PERFORMANCE.find((el) => el.userId === id);

    if (response) {
      return {
        error: "",
        kind: response.kind,
        data: response.data,
      };
    } else {
      throw new Error("User performance not found");
    }
  } catch (e) {
    console.log(e);
    return {
      error: "error",
      kind: {},
      data: [],
    };
  }
};
