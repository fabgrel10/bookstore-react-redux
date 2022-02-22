import { ADD_BOOK, GET_BOOKS, REMOVE_BOOK } from './actionTypes';

export const addBook = book => {
  return {
    type: ADD_BOOK,
    payload: book
  };
};

export const deleteBook = id => {
  return {
    type: REMOVE_BOOK,
    payload: id
  };
};

export const getBooks = () => {
  return {
    type: GET_BOOKS
  };
};
