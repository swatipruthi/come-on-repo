import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

export default class CategoriesList extends React.Component {
  // returnFilteredGames callback to parent <Container />
  handleOnClick = category => {
    this.props.returnFilteredGames(category);
  };
  render() {
    const { categoriesList } = this.props;
    return categoriesList.map(category => (
      <Card key={category.id}>
        <CardActions>
          <Button
            onClick={e => this.handleOnClick(category.id, e)}
            size="small"
            color="primary"
          >
            {category.name}
          </Button>
        </CardActions>
      </Card>
    ));
  }
}
