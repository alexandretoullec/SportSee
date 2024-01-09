import {
  getUserInfos,
  getUserActivties,
  getUserAverageSession,
  getUserPerformance,
} from "./apilCall";

import {
  mockUserInfos,
  mockUserActivties,
  mockUserAverageSessions,
  mockUserPerformance,
} from "./mocksCalls";

/**
 * Retrieves data based on the specified type, user ID, and whether to use mocked data.
 *
 * @param {string} type - The type of data to retrieve.
 * @param {number} id - User ID.
 * @param {boolean} isMocked - Whether to use mocked data or API data.
 * @returns {Promise<UserInfo | UserActivity | UserPerformance | UserAverageSessions>} - Retrieved data or error details.
 * @throws {Error} - Throws an error if an unsupported data type is specified.
 */

export const getData = async (type, id, isMocked) => {
  let data = [];
  //   let isMocked = false;

  if (isMocked) {
    switch (type) {
      case "USER_MAIN_DATA":
        data = await mockUserInfos(id);
        break;
      case "USER_ACTIVITY":
        data = await mockUserActivties(id);
        break;
      case "USER_PERFORMANCE":
        data = await mockUserPerformance(id);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await mockUserAverageSessions(id);
        break;
      default:
        throw new Error(`Unsupported mock data type: ${type}`);
    }

    return data;
  } else {
    switch (type) {
      case "USER_MAIN_DATA":
        data = await getUserInfos(id);
        break;
      case "USER_ACTIVITY":
        data = await getUserActivties(id);
        break;
      case "USER_PERFORMANCE":
        data = await getUserPerformance(id);
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await getUserAverageSession(id);
        break;
      default:
        throw new Error(`Unsupported API data type: ${type}`);
    }
  }
  return data;
};
