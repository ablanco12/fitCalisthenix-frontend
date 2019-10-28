import React, { Component } from "react";
// import FitCard from "./FitCard";

class ExperienceContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="jumbotron">
          <header>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/61GaeCfvQnL.jpg"
              className="App-logo"
              alt="logo"
            />
          </header>
        </div>

        <div className="row">
          <div className="card">
            <div className="position-absolute p-3">
              <span className="badge badge-dark rounded-lg">Beginner</span>
            </div>
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/thenx-production/image/upload/w_450/v1558975663/programs/45/1558975654.jpg"
              alt="oh no"
            />
            <div className="exercise-card-overlay card-img-overlay-gradient"></div>
          </div>
          <div className="card">
            <div className="position-absolute p-3">
              <span className="badge badge-dark rounded-lg">Intermediate</span>
            </div>
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/thenx-production/image/upload/w_450/v1559250020/programs/46/1559249983.jpg"
              alt="oh no"
            />
          </div>
          <div className="card">
            <div className="position-absolute p-3">
              <span className="badge badge-dark rounded-lg">Advanced</span>
            </div>
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/thenx-production/image/upload/w_450/v1558975698/programs/48/1558975688.jpg"
              alt="oh no"
            />
          </div>
        </div>

        {/* <div>
          <img
            className="card-img-top"
            src="https://wiemspro.asia/wp-content/uploads/Best-Exercises-Muscle-Groupsjpg.jpg"
            alt="oh no"
            height="800px"
          />
        </div> */}
      </div>
    );
  }
}

export default ExperienceContainer;
