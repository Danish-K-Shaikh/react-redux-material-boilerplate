const initialState = {
  data: {},
  dataArr: [],
  loading: false,
  loaded: false,
  error: false,
  updated: false,
  error_msg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_RESET_STATE":
      state = initialState;
      return state;
    case "GET_USERS_PENDING":
      state = {
        ...state,
        dataArr: [],
        loading: true,
        loaded: false,
        error: false,
        updated: false
      };
      return state;
      break;
    case "GET_USERS_FULFILLED":
      state = {
        ...state,
        dataArr: action.payload.data,
        loading: false,
        loaded: true,
        error: false
      };
      return state;
      break;
    case "GET_USERS_REJECTED":
      state = {
        ...state,
        dataArr: null,
        loading: false,
        loaded: true,
        error: true
      };
      return state;
    case "POST_USER_PENDING":
      state = {
        ...state,
        data: null,
        loading: true,
        loaded: false,
        updated: false,
        error: false,
        error_msg: null
      };
      return state;
    case "POST_USER_FULFILLED":
      state = {
        ...state,
        data: null,
        loading: false,
        loaded: true,
        updated: true,
        error: false,
        error_msg: null
      };
      return state;
    case "POST_USER_REJECTED":
      state = {
        ...state,
        data: null,
        loading: false,
        loaded: true,
        error: true,
        error_msg: `Something went wrong while uploading service provider.`
      };
      return state;
    case "GET_USER_BY_ID_PENDING":
      state = {
        ...state,
        data: undefined,
        dataArr: undefined,
        loading: true,
        loaded: false,
        error: false
      };
      return state;
    case "GET_USER_BY_ID_FULFILLED":
      state = {
        ...state,
        loading: false,
        loaded: true,
        error: false
      };
      let resp = action.payload.data;
      if (action.payload.isArray) {
        state.dataArr = [resp.data];
      } else {
        state.data = resp.data;
      }
      return state;
    case "GET_USER_BY_ID_REJECTED":
      state = {
        ...state,
        data: null,
        dataArr: null,
        loading: false,
        loaded: true,
        error: true,
        error_msg: `Something went wrong while fetching service provider.`
      };
      return state;
    case "PUT_USER_PENDING":
      state = {
        ...state,
        loading: true,
        loaded: false,
        updated: false,
        error: false,
        error_msg: null
      };
      return state;
    case "PUT_USER_FULFILLED":
      state = {
        ...state,
        loading: false,
        updated: true,
        error: false,
        error_msg: null
      };
      return state;
    case "PUT_USER_REJECTED":
      state = {
        ...state,
        loading: false,
        updated: false,
        error: true,
        error_msg: `Something went wrong while updating service provider.`
      };
      return state;
    default:
      return state;
      break;
  }
};
