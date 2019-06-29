import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: ""
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorName", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  };

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isPaletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          className={classes.Picker}
          onChangeComplete={newColor => this.updateCurrentColor(newColor)}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            margin="normal"
            placeholder="Color Name"
            variant="filled"
            value={newColorName}
            className={classes.colorNameInput}
            name="newColorName"
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
            style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
            disabled={isPaletteFull}
            className={classes.addColor}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
