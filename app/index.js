import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

/* ------------Material UI classes-----------*/
// import { createMuiTheme } from "@material-ui/core/styles";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { red, orange, green, grey } from "@material-ui/core/colors";

/* ------------Custom inports----------------*/
import store from "./core/store";
// import Routes from './routes';
import MainLayout from "./pages";

import ErrorBoundary from "./components/ErrorBoundary";
import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";

const EventSource = NativeEventSource || EventSourcePolyfill;
// OR: may also need to set as global property
global.EventSource = NativeEventSource || EventSourcePolyfill;

// const ServiceUtil = require('./utils/serviceUtils.js');

// injectTapEventPlugin();

const white = "#ffffff";
const black = "#000000";

const palette = {
  // error: red,
  white: "#ffffff",
  black: "#000000",
  textColor: "#424242",
  color_grey_color: "#ccc",
  color_white_color: "#fafafa",
  color_green_atlantis: "#8ece3b",
  color_silver_alto: "#dadada",
  color_blue_shade: "#461bbf",
  background: {
    default: white,
    active: "#8dca35",
    white: "#fff",
    black: grey["900"],
    grey: grey["200"]
  },
  padding: "5%",
  margin: 4,
  // Used by `getContrastText()` to maximize the contrast between the background and
  // the text.
  contrastThreshold: 3,
  // Used to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
  blue_text: "#3492ff",
  primary: {
    light: "#d74b57",
    main: "#ce1f2e",
    dark: "#901520",
    contrastText: "#fff"
    // tonalOffset: 0.2,
  },
  secondary: {
    light: "#f73378",
    main: "#f50057",
    dark: "#ab003c",
    contrastText: "#fff"
  },
  tertiary: {
    light: "#eeeeee",
    main: "#eaeaea",
    dark: "#a3a3a3",
    contrastText: "#fff"
  },
  active: {
    main: "#8dca35",
    dark: "#5a9900"
  },
  success: {
    main: "#8dca35",
    dark: "#5a9900"
  },
  error: {
    light: "#d74b57",
    main: "#ce1f2e",
    dark: "#901520",
    contrastText: "#fff"
  },
  warning: {
    light: "#d74b57",
    main: orange[600],
    dark: "#901520",
    contrastText: "#fff"
  },
  textCapitalize: {
    textTransform: "capitalize"
  },
  textUppercase: {
    textTransform: "uppercase"
  }
};

const muiTheme = createMuiTheme({
  themeName: "My App Theme",
  palette: palette,
  margin: 4,
  maxWidth10: "10rem",
  maxWidth22: "22rem",
  modal: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center"
  },
  modalPaper: {
    position: "absolute",
    left: "-2%",
    right: 0,
    margin: "auto"
  }
});

const RenderDom = props => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <StrictMode>
          <ErrorBoundary>
            <Router>{IndexRoutes}</Router>
          </ErrorBoundary>
        </StrictMode>
      </ThemeProvider>
    </Provider>,
    document.getElementById("root")
  );
};

const IndexRoutes = (
  <Switch>
    {/* <Route key="login" exact path="/login" component={Login} /> */}
    <Route key="main" path="/" component={MainLayout} />
  </Switch>
);

RenderDom();
