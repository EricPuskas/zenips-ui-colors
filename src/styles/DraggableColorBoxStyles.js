const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
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
    color: "rgba(0,0,0,0.5)",
    fontSize: "12px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

export default styles;
