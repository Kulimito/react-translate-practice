import React from "react";

export default ({ label, onBlur }) => (
  <div className="enter-text">
    <label htmlFor="input-text">{label}</label>
    <input id="input-text" type="text" className="input" onBlur={onBlur} />
  </div>
);
