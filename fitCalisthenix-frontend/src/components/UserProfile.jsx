import React, { Component } from "react";
// import { Button } from "reactstrap";
import ExperienceContainer from "./ExperienceContainer";
import ExerciseContainer from "./ExerciseContainer";
import CurrentWorkout from "./CurrentWorkout";

class UserProfile extends Component {
  render() {
    // console.log("userprofile props", this.props.click);
    // console.log("this.state", this.state);
    console.log("Userprofile props", this.props);

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
        </div>
        <br></br>

        {this.props.click && (
          <div className="jumbotron">
            <div>
              <CurrentWorkout
                exercise={this.props.exercise}
                handleRemoveClick={this.props.handleRemoveClick}
              />
            </div>
          </div>
        )}

        <div className="jumbotron">
          <h1>EXERCISES</h1>
          <div>
            <ExerciseContainer
              exercises={this.props.exercises}
              handleClickFitCard={this.props.handleClickFitCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
