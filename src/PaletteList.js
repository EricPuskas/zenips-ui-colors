import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import styles from "./styles/PaletteListStyles";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <div>
              <h1 className={classes.heading}> ZenipsUIColors </h1>
            </div>
            <h3>
              <Link to="/palette/new" className={classes.create}>
                Create Palette
              </Link>
            </h3>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette, index) => (
              <MiniPalette
                key={palette.id}
                {...palette}
                deletePalette={deletePalette}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(PaletteList));
