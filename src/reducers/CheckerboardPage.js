/** @format */

import { UPDATE_BOARD_N } from "../actions/Checkerboard";

const initialState = {
  boardN: 8,
};

const verifyNewBoardN = (newBoardN) => {
  return Number.isInteger(newBoardN);
};

const SendPageReducers = (state = initialState, action) => {
  const { type, dataInput } = action;

  switch (type) {
    case UPDATE_BOARD_N:
      if (verifyNewBoardN(dataInput)) {
        return {
          ...state,
          boardN: dataInput,
        };
      }
      return state;

    default:
      return {
        ...state,
      };
  }
};

export default SendPageReducers;
