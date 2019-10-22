import React, { Component } from "react";

import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpPage from "./components/SignUpPage";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/" component={Home} />
        </div>

        
      </div>
    );
  }
}

export default App;
