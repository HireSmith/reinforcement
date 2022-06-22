// import * as types from '../constants/actionTypes.js';
import * as types from '../constants/actionTypes'

export const addCardActionCreator = (card: object): object => ({
  type: types.ADD_CARD,
  payload: card,
});

// add more action creators
export const updateCardActionCreator = (card: object): object => ({
  type: types.UPDATE_CARD,
  payload: card,
});

export const loggedInActionCreator = (ssId: number): object => ({
  type: types.LOGGED_IN,
  payload: ssId,
});
