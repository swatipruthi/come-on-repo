import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import fetch from "cross-fetch";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    //initialise state variables to avoid undefined values on render
    this.state = {
      username: "",
      password: "",
      player: {}
    };
  }

  handleOnClick = () => {
    fetch("http://localhost:3001/login", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ player: res.player });
      });
    this.routeToGamesPage();
  };

  routeToGamesPage = () => {
    console.log("history", this.props.history);
    // const path = this.props.history.location.pathname.slice(0, 22);
    // const switchedPath = path.concat("/games");
    this.props.history.push("/games");
  };
  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };
  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  render() {
    console.log(this.state.player);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <label>Username:</label>
          <input
            onChange={e => this.onUsernameChange(e)}
            name="username:"
            type="text"
            placeholder="username"
          />
          <label>Password:</label>
          <input
            onChange={e => this.onPasswordChange(e)}
            name="password:"
            type="password"
            placeholder="password"
          />
          <button onClick={this.handleOnClick}>Login</button>
        </header>
      </div>
    );
  }
}
export default withRouter(App);
