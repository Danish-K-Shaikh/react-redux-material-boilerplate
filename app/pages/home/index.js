import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, List, ListItem, ListItemText, ListItemLink } from "@material-ui/core";

import { getUsers } from "../../core/actions/user";

const styles = theme => ({
  DataExtract: {
    color: theme.palette.primary.light
  }
});

const initState = {};

class Home extends Component {
  state = { ...initState };

  extractData = e => {
    this.props.getUsers();
  };

  render() {
    const { classes, users = [] } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <h2>Home</h2>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" onClick={this.extractData}>
            Refresh Users
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h4>User's</h4>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            {users.map(user => (
              <ListItem button>
                <ListItemText primary={user.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.dataArr
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers: _ => dispatch(getUsers())
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));
