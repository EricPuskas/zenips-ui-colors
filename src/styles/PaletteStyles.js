import sizes from "./sizes";
export default {
  Palette: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowY: "scroll",
    overflowX: "hidden"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255,255,255,0.3)",
      fontSzie: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      TextDecoration: "none"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  }
};
