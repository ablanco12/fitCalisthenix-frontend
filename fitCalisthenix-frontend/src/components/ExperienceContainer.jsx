import React, { Component } from "react";
import FitCard from "./FitCard";

class ExperienceContainer extends Component {
  state = {};
  render() {
    return (
      <div className="ui three column grid">
        <div className="row">
          <div>
            <FitCard />
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceContainer;
