import sizes from "./sizes";
import chroma from "chroma-js";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%"
    }
  },
  boxContent: {
    width: "100%",
    position: "absolute",
    padding: "10px",
    left: "0",
    bottom: "0",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    color: props =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.8)"
        : "rgba(0,0,0,0.6)"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

export default styles;
