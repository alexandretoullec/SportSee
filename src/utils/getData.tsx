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
        return [];
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
        return [];
    }
  }
  return data;
};
