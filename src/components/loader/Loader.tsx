/* react  */
import React from "react";
import PropTypes from "prop-types";
/* css  */
import "./loader.scss";

/**
 * @function Spinner
 * @export
 * @description component that render load spinner
 * @param  {string} title - style class
 * @param  {string} typeLoader - loader type
 * @param  {string} formatting - formatting
 * @return {HTMLElement} component generated HTML
 */
export default function Spinner({ title, typeLoader, formatting }) {
  /*  example formatting = "spinnerMedium" */
  return (
    <div className="container__spinner ">
      <h1>{title}</h1>
      <div className="loader"></div>
    </div>
  );
}
