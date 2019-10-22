import React, { Component } from "react";
import logo from "../muscleLogo.svg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="App-header container">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-link">fitCalisthenix</p>
        </header>
      </div>
    );
  }
}

export default Home;
