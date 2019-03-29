import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

export default class CategoriesList extends React.Component {
  handleOnClick = () => {
    alert("play");
  };
  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia image={this.props.location.state.player.avatar} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {"Games List"}
            </Typography>
            <Typography component="p">{"Categories List"}</Typography>
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
    );
  }
}
