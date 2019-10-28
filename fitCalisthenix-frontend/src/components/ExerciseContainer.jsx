import React, { Component } from "react";
import FitCard from "./FitCard";
import "../ExerciseContainer.css";

class ExerciseContainer extends Component {
  state = {};
  render() {
    const exercises = this.props.exercises;
    // console.log(myData);

    return (
      <div className="container">
        <div className="row1">
          {exercises.map(exercise => (
            <FitCard
              key={exercise.id}
              name={exercise.name}
              exercise={exercise}
              handleClickFitCard={this.props.handleClickFitCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ExerciseContainer;
