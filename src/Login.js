import React, { Component } from "react";
import fetch from "cross-fetch";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import logo from "./logo.svg";
import "./App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    //initialise state variables to avoid undefined values on render
    this.state = {
      username: "",
      password: "",
      player: {}
    };
  }

  //fetch login api
  handleOnClick = () => {
    const { username, password } = this.state;
    fetch("http://localhost:3001/login", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === "success") {
          this.setState({ player: res.player });
          this.routeToGamesPage();
        } else {
          alert("Invalid username or password");
        }
      });
  };

  //route to games page on successfull login
  routeToGamesPage = () => {
    const { username, player } = this.state;
    this.props.history.push({
      pathname: "/games",
      state: {
        username,
        player
      }
    });
  };

  //controlled input set username
  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  //controlled input set password
  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <TextField
            onChange={e => this.onUsernameChange(e)}
            required
            label="Username"
            type="text"
            margin="normal"
            variant="outlined"
            placeholder="username"
          />
          <TextField
            onChange={e => this.onPasswordChange(e)}
            type="password"
            required
            placeholder="password"
            margin="normal"
            variant="outlined"
            label="Password"
          />
          <Button
            onClick={this.handleOnClick}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </header>
      </div>
    );
  }
}
export default withRouter(Login);
