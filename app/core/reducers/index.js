import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// app reducers
import user from "./other/reducer-user";
import snackbar from "./other/reducer-snackbar";

const allReducers = combineReducers({
  user,
  snackbar
});

export default allReducers;
