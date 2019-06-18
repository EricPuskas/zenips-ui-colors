import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

class App extends Component {
  findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/:paletteID/:colorID"
          render={routeProps => (
            <SingleColorPalette
              colorID={routeProps.match.params.colorID}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteID)
              )}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <div>
      //
      // </div>
    );
  }
}
export default App;
