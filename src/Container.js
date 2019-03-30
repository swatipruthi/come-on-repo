import React from "react";
import CategoriesList from "./CategoriesList";
import Typography from "@material-ui/core/Typography";

export default class Container extends React.Component {
  // returnFilteredGames callback to parent <Container />
  returnFilteredGames = categories => {
    this.props.returnFilteredGames(categories);
  };

  render() {
    const { categoriesList } = this.props;
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5px"
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            Games
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Categories
          </Typography>
        </div>
        <div
          style={{
            width: "27%",
            position: "relative",
            float: "right",
            right: "50px",
            padding: "10px"
          }}
        >
          <CategoriesList
            categoriesList={categoriesList}
            returnFilteredGames={this.returnFilteredGames}
          />
        </div>
      </div>
    );
  }
}
