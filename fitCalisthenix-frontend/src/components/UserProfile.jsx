import React, { Component } from "react";
// import { Button } from "reactstrap";

class UserProfile extends Component {
  render() {
    // console.log("userprofile props", this.props.myData);
    console.log("accounts", this.props.current_user);
    return (
      <div>
        <div className="user-profile">
          {window.localStorage.getItem("username") ? (
            <h1> {window.localStorage.getItem("username")}</h1>
          ) : (
            <h1>Not logged in, aww</h1>
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;
