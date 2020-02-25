import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = theme => ({
  root: {
    width: '80%',
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
    margin: 0,
    padding: 0,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  close: {
    display: 'contents',
  },
});

function ModuleSnackbarContent(props) {
  const {
    classes,
    className,
    message,
    onClose,
    variant = 'info',
    iconHide,
    ...other
  } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], classes.default, className)}
      aria-describedby="client-snackbar"
      id="snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {Icon ? (
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
          ) : null}
          {message}
        </span>
      }
      action={
        iconHide
          ? [<React.Fragment />]
          : [
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={onClose}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>,
            ]
      }
      {...other}
    />
  );
}

ModuleSnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  iconHide: PropTypes.bool,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const SnackbarContentWrapper = withStyles(styles1)(ModuleSnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  root: {
    zIndex: 2000,
  },
  default: {
    width: '85%',
    zIndex: 2000,
  },
});

class SnackbarModule extends React.Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.onClose();
  };

  render() {
    const {
      classes,
      open = false,
      message = '',
      variant = 'info',
      iconHide = false,
    } = this.props;

    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          className={classes.root}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <SnackbarContentWrapper
            iconHide={iconHide}
            className={classes.default}
            onClose={this.handleClose}
            variant={variant}
            message={message}
          />
        </Snackbar>
      </React.Fragment>
    );
  }
}

SnackbarModule.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.node,
  iconHide: PropTypes.bool,
};

export default withStyles(styles2)(SnackbarModule);
