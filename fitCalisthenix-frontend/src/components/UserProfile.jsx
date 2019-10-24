import React, { Component } from "react";
// import { Button } from "reactstrap";
import ExperienceContainer from "./ExperienceContainer";
import ExerciseContainer from "./ExerciseContainer";
import CurrentWorkout from "./CurrentWorkout";

class UserProfile extends Component {
  render() {
    console.log("userprofile props", this.props.current_user);

    return (
      <div className="user-profile">
        {window.localStorage.getItem("username") ? (
          <h1> {window.localStorage.getItem("username")}</h1>
        ) : (
          <h1>Not logged in, aww</h1>
        )}
        <br></br>
        <div className="jumbotron">
          <div>
            <ExperienceContainer />
          </div>
          <br></br>
          <div className="jumbotron">
            <CurrentWorkout
              exercise={this.props.exercise}
              handleRemoveClick={this.props.handleRemoveClick}
            />
          </div>
          <div className="jumbotron">
            <h1>EXERCISES</h1>
            <div>
              <ExerciseContainer
                myData={this.props.myData}
                handleClick={this.props.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
