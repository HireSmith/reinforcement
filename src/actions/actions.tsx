// import * as types from '../constants/actionTypes.js';
import * as types from '../constants/actionTypes'

export const addCardActionCreator = card => ({
  type: types.ADD_CARD,
  payload: card,
});

// add more action creators
export const updateCardActionCreator = card => ({
  type: types.UPDATE_CARD,
  payload: card,
});

export const loggedInActionCreator = ssId => ({
  type: types.LOGGED_IN,
  payload: ssId,
});
