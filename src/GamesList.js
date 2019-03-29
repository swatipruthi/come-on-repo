import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default class GamesList extends React.Component {
  handleOnClick = () => {
    alert("play");
  };
  render() {
    console.log("games list", this.props.gamesList);

    const { gamesList } = this.props;
    return gamesList.map(game => (
      <Card>
        <CardActionArea>
          <CardMedia image={game.icon} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {game.name}
            </Typography>
            <Typography component="p">{game.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={this.handleOnClick}
            variant="contained"
            color="primary"
          >
            Play
          </Button>
        </CardActions>
      </Card>
    ));
  }
}
