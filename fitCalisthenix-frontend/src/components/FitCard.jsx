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
      <div className="ui column">
        <HoverText>
          <div
            className="ui card"
            key={exercise.id}
            onClick={() => this.props.handleClick(exercise)}
          >
            <div className="image">
              <img alt="oh no!" src={exercise.image_url} />
            </div>
            <div className="content">
              <div className="header">{exercise.name}</div>

              <div className="meta text-wrap">
                {/* <small>{bot.catchphrase}</small> */}
              </div>
            </div>
          </div>
        </HoverText>
      </div>
    );
  }
}

export default FitCard;
