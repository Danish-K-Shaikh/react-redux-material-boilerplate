export function openSnackBar(msg, variant) {
  return {
    type: 'OPEN_SNACK_BAR',
    payload: {
      msg,
      variant,
    },
  };
}

export function closeSnackBar() {
  return {
    type: 'CLOSE_SNACK_BAR',
  };
}
