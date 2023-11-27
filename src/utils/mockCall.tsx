// import {
//   USER_ACTIVITY,
//   USER_MAIN_DATA,
//   USER_PERFORMANCE,
//   USER_AVERAGE_SESSIONS,
// } from "../mockedDatas/data";

// import PropTypes from "prop-types";

// export const mockUserInfos = async (id) => {
//   try {
//     const response = USER_MAIN_DATA.find((e) => e.id === id);

//     return {
//       error: "",
//       firstName: response.userInfos.firstName,
//       score: response.score || response.todayScore,
//       calorieCount: reponse.keyData.calorieCount,
//       proteinCount: reponse.keyData.proteinCount,
//       carbohydrateCount: reponse.keyData.carbohydrateCount,
//       lipidCount: reponse.keyData.lipidCount,
//     };
//   } catch (e) {
//     console.log(e);
//     return {
//       error: "error",
//       firstName: "",
//       score: "",
//       calorieCount: "",
//       proteinCount: "",
//       carbohydrateCount: "",
//       lipidCount: "",
//     };
//   }
// };
// mockUserInfos.PropTypes = {
//   id: PropTypes.number.isRequired,
// };
