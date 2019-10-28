import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpPage from "./components/SignUpPage";
import UserProfile from "./components/UserProfile";
// import LoginFrom from "./components/login";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    myData: [],
    accounts: {
      name: "",
      username: "",
      email: "",
      password: "",
      cPassword: "",
      age: "",
      height: "",
      weight: ""
    },
    login: {
      username: "",
      password: ""
    },
    loggedin: true,
    current_user: "",
    exercise: [],
    click: false
  };
  fetchingData = () => {
    fetch("http://localhost:3000/exercises")
      .then(resp => resp.json())
      .then(data => {
        // console.log("data", data);
        this.setState({
          myData: data,
          loggedin: true
        });
      });
  };

  componentDidMount() {
    console.log("this.state.component >>> ", this.state.loggedin);
    if (this.state.loggedin) {
      this.fetchingData();
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { accounts } = this.state;
    // console.log("this is the stuff you have on form", event);
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          name: accounts.name,
          username: accounts.username,
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

  handleLoginChange = event => {
    const login = { ...this.state.login };
    login[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ login });
  };

  handleClick = event => {
    // console.log("login", this.state.login);
    // console.log("thiis hits", event);
    // event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.login.username,
          password: this.state.login.password
        }
      })
    };
    fetch(`http://localhost:3000/api/login`, configObj)
      .then(resp => resp.json())
      .then(json => {
        // this.props.history.push("/home");
        window.localStorage.setItem("token", json.jwt);
        window.localStorage.setItem("username", json.user.name);
        console.log("fetching after loggin in", json);
        this.setState({
          current_user: json.user.name,
          login: {
            username: "",
            password: ""
          },
          loggedin: true
        });
      });
  };

  handleClickLogout = event => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/home");
  };

  handleClickFitCard = exercise => {
    const exerciseAfterAdd = this.state.exercise.concat(exercise);
    console.log(this.state.exercise);
    this.setState({
      exercise: exerciseAfterAdd,
      click: true
    });
  };

  handleRemoveClick = exercise => {
    let filteredExercises = this.state.exercise.filter(
      fexer => fexer.id !== exercise.id
    );
    console.log(this.state.exercise);
    this.setState({
      exercise: filteredExercises
    });
  };

  render() {
    // console.log("click", this.state.click);
    // console.log("this.state.loggedin", this.state.loggedin);
    console.log("exercises", this.state.myData);
    // console.log("this.state.current_user", this.state.current_user);
    const { myData, accounts, current_user, exercise, click } = this.state;
    return (
      <div className="App">
        <NavBar
          handleLoginChange={this.handleLoginChange}
          handleClick={this.handleClick}
          handleClickLogout={this.handleClickLogout}
          login={this.state.login}
        />
        <div>
          <Route
            path="/profile"
            render={() => (
              <UserProfile
                exercises={myData}
                click={click}
                exercise={exercise}
                accounts={accounts}
                current_user={current_user}
                handleRemoveClick={this.handleRemoveClick}
                handleClickFitCard={this.handleClickFitCard}
              />
            )}
          />
          <Route
            path="/signup"
            render={() => (
              <SignUpPage
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                accounts={accounts}
              />
            )}
          />
          <Route path="/" component={Home} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
