import React, { Component } from "react";
import FitCard from "./FitCard";

class WorkoutsContainer extends Component {
  state = {};
  render() {
    return (
      <div className="ui three column grid">
        <div className="row">
          <div>
            <FitCard />
          </div>
          <div>
            <FitCard />
          </div>
          <div>
            <FitCard />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutsContainer;
