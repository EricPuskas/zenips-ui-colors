import sizes from "./sizes";
import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    /* background by SVGBackgrounds.com */
    backgroundColor: "#8499c2",
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    overflowY: "scroll",
    overflowX: "hidden",
    justifyContent: "center"
  },
  heading: {
    fontSize: "2rem",
    width: "100%",
    textAlign: "center"
  },
  create: {
    textAlign: "center",
    width: "100%",
    display: "block"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    width: "100%",
    color: "white",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      gridGap: "1.4rem"
    }
  }
};
