import React, { Component } from "react";
import FitCard from "./FitCard";

class ExerciseContainer extends Component {
  state = {};
  render() {
    const exercises = this.props.exercises;
    // console.log(myData);

    return (
      <div className="ui three column grid">
        <div className="row">
          {exercises.map(exercise => (
            <FitCard
              key={exercise.id}
              name={exercise.name}
              exercise={exercise}
              handleClick={this.props.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ExerciseContainer;
