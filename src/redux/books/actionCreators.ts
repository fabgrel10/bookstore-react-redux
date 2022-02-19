import { ADD_BOOK, REMOVE_BOOK } from './actionTypes';

export const addBook = (payload: Book) => {
  return {
    type: ADD_BOOK,
    payload
  };
};

export const removeBook = (payload: Book) => {
  return {
    type: REMOVE_BOOK,
    payload
  };
};
