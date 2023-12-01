import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mockedDatas/data"; // Adjust the path based on your project structure

export const useFetch = (url, isMocked = true) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Use mocked data if specified or if there is an error during the API request
        if (isMocked || error) {
          handleMockedData(url);
        } else {
          // Fetch real data
          const response = await fetch(url);
          const realData = await response.json();
          setData(realData);
        }
      } catch (err) {
        console.error(err);
        setError(true);

        // Use mocked data when an error occurs during the API request
        if (isMocked) {
          handleMockedData(url);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, isMocked, error]);

  const handleMockedData = (url) => {
    const isUserUrl = url.includes("user");
    const isActivityUrl = url.includes("activity");
    const isAverageSessionsUrl = url.includes("average-sessions");
    const isPerformanceUrl = url.includes("performance");

    if (isUserUrl) {
      const userId = parseInt(url.split("/").pop(), 10);

      if (isActivityUrl) {
        setData(USER_ACTIVITY.find((item) => item.userId === userId) || null);
      } else if (isAverageSessionsUrl) {
        setData(
          USER_AVERAGE_SESSIONS.find((item) => item.userId === userId) || null
        );
      } else if (isPerformanceUrl) {
        setData(
          USER_PERFORMANCE.find((item) => item.userId === userId) || null
        );
      } else {
        setData(USER_MAIN_DATA.find((item) => item.id === userId) || null);
      }
    } else {
      // Handle other mocked data scenarios if needed
    }
  };
  console.log(data);

  return { isLoading, data, error };
};

// export const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   const [isLoading, setIsLoading] = useState(true);

//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (!url) return;
//     setIsLoading(true);

//     async function fetchData() {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setData(data);
//       } catch (err) {
//         console.log(err);
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     setIsLoading(true);
//     fetchData();
//   }, [url]);

//   return { isLoading, data };
// };

// Mocked data imports
