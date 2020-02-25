const ServiceUtil = require("../../../utils/serviceUtils");

/**
 * Action to send error logs to server from error boundary.
 * @param {Object} params [Contains error and errorInfo]
 */
export function logErrorBoundary(params) {
  return {
    type: "LOG_ERROR_BOUNDARY",
    payload: new Promise((resolve, reject) => {
      ServiceUtil.postDataToService(
        "/errorlog",
        params,
        {},
        resolvedData => {
          resolve({ ...resolvedData });
        },
        failedData => {
          reject(failedData);
        }
      );
    })
  };
}
