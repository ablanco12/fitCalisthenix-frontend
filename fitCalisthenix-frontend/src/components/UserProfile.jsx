import React, { Component } from "react";
// import { Button } from "reactstrap";
import ExperienceContainer from "./ExperienceContainer";
import WorkoutsContainer from "./WorkoutsContainer";

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <div className="user-profile">
        <br></br>
        <div className="jumbotron">
          <h1>Choose your level of experience</h1>
          <div>
            <ExperienceContainer />
          </div>
          <div className="jumbotron">
            <h1>Workouts</h1>
            <div>
              <WorkoutsContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
