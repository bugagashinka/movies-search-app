import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import { movies } from "./assets/data/mockData";

ReactDOM.render(
  <React.StrictMode>
    <App movies={movies} />
  </React.StrictMode>,
  document.getElementById("root")
);
