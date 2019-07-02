import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/styles";

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: false,
  productionPrefix: "c"
});

ReactDOM.render(
  <JssProvider generateClassName={generateClassName}>
    <Router>
      <App />
    </Router>
  </JssProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
