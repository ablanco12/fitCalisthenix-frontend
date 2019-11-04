import React, { Component } from "react";
import FitCard from "./FitCard";
import { Button } from "reactstrap";
import StopWatch from "./StopWatch";
import CurrentMuscleGroup from "./CurrentMuscleGroup";

class CurrentWorkout extends Component {
  state = {
    rounds: 0,
    reps: 0,
    show: true
  };

  IncrementRound = () => {
    this.setState({ rounds: this.state.rounds + 1 });
  };
  DecreaseRound = () => {
    this.setState({ rounds: this.state.rounds - 1 });
  };
  IncrementRep = () => {
    this.setState({ reps: this.state.reps + 1 });
  };
  DecreaseRep = () => {
    this.setState({ reps: this.state.reps - 1 });
  };

  render() {
    console.log("this is my props", this.props);
    const { exercises } = this.props;

    return (
      <div className="ui three column grid">
        <h1>CURRENT CIRCUIT</h1>

        <div className="row">
          {exercises.map(exercise => (
            <FitCard
              key={exercise.id}
              exercise={exercise}
              handleClick={this.props.handleRemoveClick}
            />
          ))}

          <br></br>
          <div>
            <br></br>

            <h3>ROUNDS</h3>
            <div>
              {this.state.show ? <h1>{this.state.rounds}</h1> : ""}
              <Button onClick={this.IncrementRound}>+</Button>
              <Button onClick={this.DecreaseRound}>-</Button>
            </div>
            <br></br>
            <h3>REPS</h3>
            <div>
              {this.state.show ? <h1>{this.state.reps}</h1> : ""}
              <Button onClick={this.IncrementRep}>+</Button>
              <Button onClick={this.DecreaseRep}>-</Button>
            </div>
          </div>
          <div>
            <StopWatch status={false} runningTime={0} />
          </div>
          <div>
            <CurrentMuscleGroup />
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWorkout;
