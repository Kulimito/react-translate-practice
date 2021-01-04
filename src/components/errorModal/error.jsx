import React from "react";
import ReactDOM from "react-dom";

import "./erro.css";

const portal = document.getElementById("modal-hook");

export default ({ onClick, error }) => {
  const content = (
    <div className="error-modal" onClick={onClick}>
      <header>Something get wrong</header>
      <p>{error}</p>
    </div>
  );
  return ReactDOM.createPortal(content, portal);
};
