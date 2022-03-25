import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuizContextProvider } from "./Helpers/QuizContext";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
ReactDOM.render(
  <QuizContextProvider>
    <App />
  </QuizContextProvider>,
  document.getElementById("root")
);
