import { ADD_BOOK, REMOVE_BOOK } from './actionTypes';

export const addBook = (payload: Data) => {
  return {
    type: ADD_BOOK,
    payload
  };
};

export const removeBook = (payload: Data) => {
  return {
    type: REMOVE_BOOK,
    payload
  };
};
