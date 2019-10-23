import React, { Component } from "react";

import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpPage from "./components/SignUpPage";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";

class App extends Component {
  state = {
    myData: [],
    accounts: {
      name: "",
      email: "",
      password: "",
      age: "",
      height: "",
      weight: ""
    }
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

  handleSubmit = event => {
    event.preventDefault();
    const { accounts } = this.state;
    // console.log("this is the stuff you have on form", event);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          name: accounts.name,
          email: accounts.email,
          password: accounts.password,
          age: accounts.age,
          height: accounts.height,
          weight: accounts.weight
        }
      })
    })
      .then(r => r.json())
      .then(r => console.log("successfully created an account", r));
  };

  handleChange = event => {
    const accounts = { ...this.state.accounts };
    accounts[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ accounts });
  };

  render() {
    // console.log("app state", this.state);
    const { myData, accounts } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div>
          <Route
            exact
            path="/profile"
            render={() => <UserProfile myData={myData} />}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <SignUpPage
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                accounts={accounts}
              />
            )}
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
