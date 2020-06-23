/** @format */

export const UPDATE_BOARD_N = "UPDATE_BOARD_N";

export const setBoardN = (dispatch) => (value) => {
  dispatch({
    type: UPDATE_BOARD_N,
    dataInput: value,
  });
};
