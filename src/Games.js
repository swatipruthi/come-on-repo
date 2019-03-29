import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import GamesList from "./GamesList";
import CategoriesList from "./CategoriesList";

export default class Games extends React.Component {
  constructor(props) {
    super(props);
    //initialise state variables to avoid undefined values on render
    this.state = {
      games: [],
      categories: [],
      showGamesList: false
    };
  }
  handleOnClick = () => {
    fetch("http://localhost:3001/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.props.location.state.username
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.props.history.push({ pathname: "/login" });
      });
  };

  handleGamesClick = () => {
    fetch("http://localhost:3001/games", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ games: res, showGamesList: true });
      });
  };

  handleCategoriesClick = () => {
    fetch("http://localhost:3001/categories", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ categories: res, showGamesList: true });
      });
  };

  renderGameButton = () => {
    return <Chip label="Games" onClick={this.handleGamesClick} />;
  };

  renderCategories = () => {
    return <Chip label="Games" onClick={this.handleCategoriesClick} />;
  };
  render() {
    console.log("games", this.props);
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia image={this.props.location.state.player.avatar} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.location.state.player.name}
              </Typography>
              <Typography component="p">
                {this.props.location.state.player.event}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={this.handleOnClick}
              variant="contained"
              color="primary"
            >
              Logout
            </Button>
          </CardActions>
        </Card>
        {this.renderGameButton()}
        {/* {this.renderCategories()} */}
        {this.state.showGamesList && <GamesList gamesList={this.state.games} />}
        {/* <CategoriesList categories={this.state.categories} /> */}
      </div>
    );
  }
}
