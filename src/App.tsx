import React from "react";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Profil from "./pages/profil/Profil";
import Reglage from "./pages/reglage/Reglage";
import Login from "./pages/login/Login";
import Communaute from "./pages/communaute/communaute";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./styles/general.scss";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:currentId",
          element: <Home />,
        },
        {
          path: "/profil",
          element: <Profil />,
        },
        {
          path: "/reglage",
          element: <Reglage />,
        },
        {
          path: "/communaute",
          element: <Communaute />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
