import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./containers/HomePage";
import JobDetails from "./components/jobDetails/JobDetails";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/job/:id" component={JobDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
