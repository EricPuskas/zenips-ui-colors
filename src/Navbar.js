import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
  }
  handleFormatChange = e => {
    this.setState({ format: e.target.value, open: true }, () =>
      this.props.handleChange(this.state.format)
    );
  };

  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel, showSlider, classes } = this.props;
    const { format } = this.state;
    return (
      <nav className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">ZenipsUIColors</Link>
        </div>
        {showSlider && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff </MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255) </MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}!
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
