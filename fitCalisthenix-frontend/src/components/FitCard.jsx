import React, { Component } from "react";
import styled from "styled-components";

class FitCard extends Component {
  state = {};

  render() {
    const HoverText = styled.p`
      color: #000;
      :hover {
        color: black;
        font-style: italic;
        font-size: 30px;
        cursor: pointer;
      }
    `;
    const { exercise } = this.props;
    return (
      <div className="col-md-5">
        <div
          className="ui card"
          onClick={() => this.props.handleClickFitCard(exercise)}
        >
          <HoverText>
            <div className="image">
              <img
                style={{ clear: "both", width: "100%" }}
                alt="oh no!"
                src={exercise.image_url}
              />
            </div>
            <div className="header">{exercise.name}</div>
          </HoverText>
        </div>
      </div>
    );
  }
}

export default FitCard;
