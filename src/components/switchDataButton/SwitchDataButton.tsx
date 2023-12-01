import React from "react";
import "./switchDataButton.scss";

const SwitchDataButton = ({ onClick, isToggled, onToggle, toggleText }) => {
  return (
    <div className="switchContainer">
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="slider rounded" />
      </label>
      <p>{toggleText}</p>
    </div>
  );
};

export default SwitchDataButton;
