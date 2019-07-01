import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";
import styles from "./styles/PaletteListStyles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      id: ""
    };
  }

  openDialog = id => {
    this.setState({ openDeleteDialog: true, id });
  };

  closeDialog = () => {
    this.setState({ openDeleteDialog: false, id: "" });
  };

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  handleDelete = id => {
    this.props.deletePalette(this.state.id);
    this.closeDialog();
  };
  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <div>
              <h1 className={classes.heading}> ZenipsUIColors </h1>
            </div>
            <h3>
              <Link to="/palette/new" className={classes.create}>
                Create Palette
              </Link>
            </h3>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette, index) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  key={palette.id}
                  {...palette}
                  // deletePalette={deletePalette}
                  openDialog={this.openDialog}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          onClose={this.closeDialog}
          open={this.state.openDeleteDialog}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(PaletteList));
