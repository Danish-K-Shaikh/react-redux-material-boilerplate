import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, Button } from "@material-ui/core";
// import Image from '../Image';

import { logErrorBoundary } from "../../core/actions/errorBoundary";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "", error: "" };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.props.logErrorBoundary({ error: error.stack, errorInfo: info });
    this.setState({ hasError: true, errorInfo: info, error: error });
  }

  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return (
        <div>
          <Grid container spacing={32}>
            <Grid item xs={12}>
              <div style={{ width: "100%", margin: "0px auto" }}>
                <img style={{ height: "250px" }} src="https://cdn.pixabay.com/photo/2015/12/04/22/23/gear-1077563_960_720.png" />
                {/* <Image style={{ width: '100%' }} src="/Oops.png" /> */}
              </div>
            </Grid>
            <Grid item xs={12}>
              Oops!!! Something went wrong
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                textAlign: "center",
                marginBottom: "20px",
                paddingTop: "0px"
              }}
            >
              {/* <h1>Aaaah! Looks like something went completely wrong. Please refresh the page and try again.</h1> */}
              <h1 style={{ color: "#ce1f2e", fontFamily: "sans-serif" }}>Please refresh the page and try again.</h1>
              <Button
                variant="outlined"
                color="secondary"
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  document.location.reload(true);
                }}
              >
                Refresh Page
              </Button>
              {/* {this.state.error.toString()}<br /> */}
              {/* {this.state.errorInfo.componentStack} */}
            </Grid>
          </Grid>
        </div>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = state => {
  return {
    errorBoundary: state.errorBoundary
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logErrorBoundary: params => {
      dispatch(logErrorBoundary(params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
