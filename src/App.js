import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
class App extends Component {
  state = {
    palettes: savedPalettes || seedColors
  };
  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  };

  savePalette = newPalette => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };

  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm
              {...routeProps}
              savePalette={this.savePalette}
              palettes={this.state.palettes}
            />
          )}
        />
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
          render={() => <PaletteList palettes={this.state.palettes} />}
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
