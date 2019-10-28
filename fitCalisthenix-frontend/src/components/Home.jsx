import React, { Component } from "react";
import logo from "../barbellbodyweight-571x250.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* image must be switched for local use */}

        <img src={logo} className="Home-logo" alt="logo" />
        <p className="App-link">fitCalisthenix</p>
      </div>
    );
  }
}

export default Home;
