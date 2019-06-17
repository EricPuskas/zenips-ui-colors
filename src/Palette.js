import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(c => (
      <ColorBox background={c.color} name={c.name} />
    ));
    return (
      <div className="Palette">
        {/* NAVBAR HERE */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer here */}
      </div>
    );
  }
}

export default Palette;
