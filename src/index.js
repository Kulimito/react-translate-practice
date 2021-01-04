import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { configStore } from "./store/actions";

configStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
