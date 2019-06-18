import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorID);
    this.state = { format: "hex" };
  }
  gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="ColorBox GoBack">
            <Link to={`/palette/${id}`} className="back-button">
              Go Back{" "}
            </Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;