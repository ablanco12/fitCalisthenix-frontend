import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={SignUpPage} />
    </div>
  </Router>,
  document.getElementById("root")
);
