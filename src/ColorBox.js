import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./styles/ColorBoxStyles";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1700);
    });
  };

  render() {
    const { name, background, moreURL, showLink, classes } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${this.state.copied &&
              classes.showOverlay}`}
          />
          <div
            className={`${classes.copyMessage} ${this.state.copied &&
              classes.showCopyMessage}`}
          >
            <h1> Copied! </h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showLink && (
            <Link to={moreURL} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
