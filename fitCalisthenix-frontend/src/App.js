import React from "react";
import logo from "./muscleLogo.svg";
import "./App.css";
// import ReactPlayer from "react-player";

const App = () => {
  return (
    <div className="App">
      <header className="App-header container">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">fitCalisthenix</p>
        <div className="overlay"></div>
        {/* <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
  </video> */}
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=mvidlyCkyFg"
          autoplay="autoplay"
          type="video/mp4"
          loop="loop"
        />
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">Motivation</h1>
              <p className="lead mb-0"></p>
            </div>
          </div>
        </div> */}
      </header>
    </div>
  );
};

export default App;
