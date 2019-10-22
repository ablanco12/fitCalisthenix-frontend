import React, { Component } from "react";

import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpPage from "./components/SignUpPage";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";

class App extends Component {
  state = {
    myData: []
  };
  fetchingData = () => {
    fetch("http://localhost:3000/exercises")
      .then(resp => resp.json())
      .then(data => {
        // console.log("data", data);
        this.setState({
          myData: data
        });
      });
  };

  componentDidMount() {
    this.fetchingData();
  }

  handleSubmit = output => {
    console.log("this is the stuff you have on form", output);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: "guy",
          password: "hi",
          bio: "King of Flavortown, USA",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg"
        }
      })
    })
      .then(r => r.json())
      .then(console.log);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // console.log("app state", this.state);
    return (
      <div className="App">
        <NavBar />
        <div>
          <Route
            exact
            path="/profile"
            render={() => <UserProfile myData={this.state.myData} />}
          />
          <Route
            exact
            path="/signup"
            render={() => <SignUpPage handleSubmit={this.handleSubmit} />}
          />
          <Route exact path="/" component={Home} />
        </div>

        {/* <div className="jumbotron">
          <h1>THIS IS THE MOTHER FUCKING PROFILE</h1>
        </div> */}
      </div>
    );
  }
}

export default App;
