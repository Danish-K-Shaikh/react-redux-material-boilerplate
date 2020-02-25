// const ErrorHandler = require('./errorHandler.js');
import axios from "axios";
import { API_DOMAIN, DOMAIN } from "../config";

const CONFIGS = {
  APP_LOGIN_REDIRECT_URL: "/login",
  SERVICE_URL_PREFIX: "/api/v1"
};

const oConfigHeaders = {
  "Content-Type": "application/json",
  crossDomain: true,
  credentials: "cross-origin"
};

const oConfigOptions = {
  withCredentials: true,
  credentials: "same-origin"
};

function getCookieByName(name) {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1")}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getCookie() {
  return getCookieByName("token");
}

function _fnFailureCallBackHandler({ error, response }, fnFailureCallback) {
  if (false) {
    try {
      //set to empty if not defined
      sApplicationUrl = sApplicationUrl || "";
      window.location = `${CONFIGS.APP_LOGIN_REDIRECT_URL}?redirect=${sApplicationUrl}`;
    } catch (e) {
      ErrorHandler.displayErrorPopup(
        "Title: Unable to load data",
        "Message: Authentication failed.",
        "Details: Unable to redirect. Kindly refresh your page and open "
      );
    }
  } else {
    // call the failure Callback method
    if (typeof fnFailureCallback === "function") {
      fnFailureCallback(response);
    }
  }
}

module.exports = {
  getLoggedInUser(fnSuccess, fnError) {
    axios({
      ...oConfigOptions,
      url: `${CONFIGS.SERVICE_URL_PREFIX}/profile`,
      // url: `http://localhost:8080/me`,
      method: "get",
      headers: oConfigHeaders
    })
      .then(response => {
        fnSuccess(response.data);
      })
      .catch(error => {
        _fnFailureCallBackHandler(error, fnError);
      });
  },
  doLogin(serviceURI, dataToPost, fnSuccess, fnError) {
    axios({
      ...oConfigOptions,
      url: `${CONFIGS.SERVICE_URL_PREFIX}${serviceURI}`,
      method: "post",
      data: dataToPost,
      headers: oConfigHeaders
    })
      .then(response => {
        fnSuccess(response.data);
      })
      .catch(error => {
        _fnFailureCallBackHandler(error, fnError);
      });
  },

  doSignup(serviceURI, dataToPost, fnSuccess, fnError) {
    axios({
      ...oConfigOptions,
      url: `${CONFIGS.SERVICE_URL_PREFIX}${serviceURI}`,
      method: "post",
      data: dataToPost,
      headers: oConfigHeaders
    })
      .then(response => {
        fnSuccess(response.data);
      })
      .catch(error => {
        _fnFailureCallBackHandler(error, fnError);
      });
  },

  getDataFromService(serviceURI, params, fnSuccess, fnError) {
    if (serviceURI === "/order/us") {
      setTimeout(() => {
        fnSuccess();
      }, 2);
    } else {
      axios({
        ...oConfigOptions,
        url: `${CONFIGS.SERVICE_URL_PREFIX}${serviceURI}?token=${getCookie()}`,
        method: "get",
        params: params,
        headers: oConfigHeaders
        // credentials: 'same-origin',
      })
        .then(response => {
          fnSuccess(response.data);
        })
        .catch(error => {
          _fnFailureCallBackHandler(error, fnError);
        });
    }
  },

  postDataToService(serviceURI, data, params, fnSuccess, fnError) {
    axios({
      ...oConfigOptions,
      url: `${CONFIGS.SERVICE_URL_PREFIX}${serviceURI}`,
      method: "post",
      data: data,
      headers: oConfigHeaders
    })
      .then(response => {
        fnSuccess(response.data);
      })
      .catch(error => {
        _fnFailureCallBackHandler(error, fnError);
      });
  },

  putDataToService(serviceURI, data, params, fnSuccess, fnError) {
    axios({
      ...oConfigOptions,
      url: `${CONFIGS.SERVICE_URL_PREFIX}${serviceURI}`,
      method: "put",
      data: data,
      headers: oConfigHeaders
    })
      .then(response => {
        fnSuccess(response.data);
      })
      .catch(error => {
        _fnFailureCallBackHandler(error, fnError);
      });
  },

  deleteDataFromService(serviceURI, data, params, fnSuccess, fnError) {
    axios({
      ...oConfigOptions,
      url: `${CONFIGS.SERVICE_URL_PREFIX}${serviceURI}`,
      method: "delete",
      data: data,
      headers: oConfigHeaders
    })
      .then(response => {
        // console.log('i am the respons====', response);
        fnSuccess(response.data);
      })
      .catch(error => {
        _fnFailureCallBackHandler(error, fnError);
      });
  }
};
