import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorBox from "./DraggableColorBox";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const drawerWidth = 350;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentColor: "teal",
      colors: [{ color: "blue", name: "blue" }],
      name: ""
    };
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorName", value =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  addNewColor = e => {
    e.preventDefault();
    const newColor = { color: this.state.currentColor, name: this.state.name };
    this.setState({ colors: [...this.state.colors, newColor], name: "" });
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = () => {
    let newName = "New Test Palette";
    const newPalette = {
      paletteName: newName,
      id: newName.toLocaleLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };
  render() {
    const { classes } = this.props;
    const { open, currentColor, colors, name } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Save Palette
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design your Palette. </Typography>
          <div>
            <Button variant="contained" color="secondary">
              Clear Palette
            </Button>
            <Button variant="contained" color="primary">
              Random Color
            </Button>
          </div>

          <ChromePicker
            color={currentColor}
            onChangeComplete={newColor => this.updateCurrentColor(newColor)}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              value={name}
              onChange={this.handleChange}
              validators={["required", "isColorName", "isColorUnique"]}
              errorMessages={[
                "Enter a color name.",
                "Color name must be unique",
                "Color already used."
              ]}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{ backgroundColor: currentColor }}
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {colors.map(color => (
            <DraggableColorBox color={color.color} name={color.name} />
          ))}
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
