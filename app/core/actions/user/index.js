import { openSnackBar, closeSnackBar } from "../snackbar/";
const ServiceUtil = require("../../../utils/serviceUtils");

/**
 * Action to send error logs to server from error boundary.
 * @param {Object} params [Contains error and errorInfo]
 */
export function getUsers(params) {
  return {
    type: "GET_USERS",
    payload: new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
          if (response.status !== 200) {
            reject({ msg: "Looks like there was a problem. Status Code: " + response.status });
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            resolve({ data, msg: "Users fetched successfully" });
          });
        })
        .catch(function(err) {
          reject({ msg: err.msg || "Something went wrong", err });
        });
      // ServiceUtil.getDataFromService(
      //   "/csp",
      //   null,
      //   resolvedData => {
      //     typeof dispatch === "function" && notifySuccess ? dispatch(openSnackBar("CSP's fetched successfully", "success")) : "";
      //     resolve({
      //       data: resolvedData
      //     });
      //   },
      //   failedData => {
      //     typeof dispatch === "function" && notifyError ? dispatch(openSnackBar("Something went wrong while fetching data")) : "";
      //     reject(failedData);
      //   }
      // );
    })
  };
}
