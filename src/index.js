import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "@fortawesome/fontawesome-free/js/all.js";

import "react-calendar/dist/Calendar.css";

import "react-calendar/dist/Calendar.css";
import DateRangePicker from "react-bootstrap-daterangepicker";

import "./index.css";
import "./styles/common.scss";
import "./styles/reset.scss";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
