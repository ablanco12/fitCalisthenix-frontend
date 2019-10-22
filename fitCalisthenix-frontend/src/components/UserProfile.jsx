import React, { Component } from "react";
// import { Button } from "reactstrap";

class UserProfile extends Component {
  state = {};
  render() {
    // console.log("userprofile props", this.props.myData);
    return (
      <div>
        <div className="user-profile">
          <ul>
            {this.props.myData.map(data => (
              <p key={data.id}>{data.name}</p>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserProfile;
