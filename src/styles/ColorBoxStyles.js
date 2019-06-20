import chroma from "chroma-js";

export default {
  ColorBox: {
    width: "20%",
    height: props => (props.showLink ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover button": {
      opacity: "1"
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() > 0.5 ? "black" : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.2 ? "white" : "black"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() > 0.5 ? "rgba(0,0,0,0.6)" : "white",
    background: "rgba(255,255,255,0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() > 0.5 ? "rgba(0,0,0,0.6)" : "white",
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
    opacity: "0",
    TextDecoration: "none"
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    padding: "10px",
    left: "0",
    bottom: "0",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#000",
    fontSize: "12px",
    fontWeight: "bold"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)"
  },
  showOverlay: {
    opacity: "1",
    maxWidth: "100%",
    transform: "scale(20)",
    zIndex: "10",
    position: "absolute"
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "#fff",
    flexDirection: "column"
  },
  showCopyMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "11",
    transition: "all 0.3s ease-in-out",
    transitionDelay: "0.3s",
    "& h1": {
      fontWeight: "400",
      textShadow: " 1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase"
    },
    "& p": {
      fontSize: "2rem"
    }
  }
};
