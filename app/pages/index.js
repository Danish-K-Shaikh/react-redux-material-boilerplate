import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { MainRoutes as Routes } from "../routes";

import { closeSnackBar } from "../core/actions/snackbar";

import SnackBar from "../components/Snackbar";

const styles = theme => ({
  footer: {
    position: "fixed",
    bottom: 0
  }
});

class MainLayout extends React.Component {
  getData = e => {};

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <SnackBar
          open={this.props.snackbarOpen}
          autoHideDuration={4000}
          onClose={this.props.closeSnackbar}
          variant={this.props.snackbarVariant}
          message={this.props.snackbarMsg}
        />
        <Grid item xs={12}>
          <h1>This is header area</h1>
          {/* Put your menu and link component's or Header component here */}
        </Grid>
        <Grid item xs={12}>
          {Routes}
        </Grid>
        <Grid item xs={12}>
          <footer className={classes.footer}>
            <h2>Footer is here</h2>
          </footer>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    snackbarMsg: state.snackbar.msg,
    snackbarVariant: state.snackbar.variant,
    snackbarOpen: state.snackbar.open
  };
}

const mapDispatchToProps = dispatch => {
  return {
    closeSnackbar: () => dispatch(closeSnackBar())
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MainLayout));
