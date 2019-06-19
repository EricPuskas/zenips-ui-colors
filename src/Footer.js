import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";

const Footer = ({ paletteName, emoji, classes }) => {
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.Emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(Footer);
