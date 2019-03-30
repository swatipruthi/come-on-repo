import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./Landing";

import "./index.css";
import Login from "./Login";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/games" component={Landing} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
