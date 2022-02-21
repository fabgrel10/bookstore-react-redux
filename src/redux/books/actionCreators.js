import { ADD_BOOK, REMOVE_BOOK } from './actionTypes';

export const addBook = book => {
  return {
    type: ADD_BOOK,
    payload: book
  };
};

export const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    payload: book
  };
};
