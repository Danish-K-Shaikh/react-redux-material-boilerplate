const initialState = {
  open: false,
  msg: '',
  variant: 'success',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'OPEN_SNACK_BAR':
      return {
        ...state,
        open: true,
        msg: payload.msg,
        variant: payload.variant,
      };
    case 'CLOSE_SNACK_BAR':
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};
