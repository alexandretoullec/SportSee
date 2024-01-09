import React from "react";
import { Link } from "react-router-dom";
import "./error.scss";

const Error = () => {
  return (
    <div className="error">
      <h1 className="errorTitle">Error 404 !!</h1>
      <Link to="/">Come back Home !!</Link>
    </div>
  );
};

export default Error;
