import React from "react";
import Container from "./Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GamesList from "./GamesList";
import SearchComponent from "./SearchComponent";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    //initialise state variables to avoid undefined values on render
    this.state = {
      games: [],
      categories: [],
      filteredGamesList: [],
      searchText: "",
      categoryGames: []
    };
  }

  //fetch logout api
  handleLogoutClick = () => {
    const { username } = this.props.location.state;
    fetch("http://localhost:3001/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === "success")
          this.props.history.push({ pathname: "/" });
      });
  };

  //fetch categories and games after component mounts
  componentDidMount() {
    this.fetchCategories();
  }

  //return games based on category
  returnFilteredGames = category => {
    let filteredResult = this.state.games;
    if (category) {
      filteredResult = this.state.games.filter(game => {
        return game.categoryIds.find(id => id === category);
      });
    }
    this.setState({ categoryGames: filteredResult });
  };

  //fetch games api
  fetchGamesList = () => {
    fetch("http://localhost:3001/games", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({ games: res, filteredGamesList: res });
      });
  };

  //fetch categories api
  fetchCategories = () => {
    fetch("http://localhost:3001/categories", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({ categories: res });
      })
      .then(this.fetchGamesList());
  };

  // search games from the list
  onSearch = e => {
    let filteredResult = this.state.games;
    if (e.target.value) {
      filteredResult = this.state.games.filter(element => {
        return (
          element.name
            .trim()
            .toLowerCase()
            .indexOf(e.target.value.trim().toLowerCase()) !== -1
        );
      });
    }
    this.setState({ filteredGamesList: filteredResult });
  };

  // render header of games page
  renderHeader = () => {
    const { player } = this.props.location.state;
    return (
      <Card>
        <CardActionArea>
          <CardMedia image={player.avatar} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {player.name}
            </Typography>
            <Typography component="p">{player.event}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={this.handleLogoutClick}
            variant="contained"
            color="primary"
          >
            Logout
          </Button>
        </CardActions>
        <SearchComponent
          onSearch={this.onSearch}
          placeholder="Search for games here..."
        />
      </Card>
    );
  };

  render() {
    //object destructuring
    const { categories, games, categoryGames, filteredGamesList } = this.state;
    return (
      <div>
        {this.renderHeader()}
        <Container
          categoriesList={categories}
          gamesList={games}
          returnFilteredGames={this.returnFilteredGames}
        />
        {categoryGames.length > 0 ? (
          <GamesList
            gamesList={categoryGames}
            style={{
              display: "flex",
              flexFlow: "column"
            }}
          />
        ) : (
          <GamesList
            gamesList={filteredGamesList}
            style={{
              display: "flex",
              flexFlow: "column"
            }}
          />
        )}
      </div>
    );
  }
}
