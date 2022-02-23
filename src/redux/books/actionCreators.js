import axios from 'axios';
import { ADD_BOOK, GET_BOOKS, REMOVE_BOOK } from './actionTypes';

const baseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'M6LS4rhKtwdJQwXFSARq';

export const addBook = payload => {
  return {
    type: ADD_BOOK,
    payload
  };
};

export const deleteBook = payload => {
  return {
    type: REMOVE_BOOK,
    payload
  };
};

export const getBooks = payload => {
  return {
    type: GET_BOOKS,
    payload
  };
};

export const asyncAddBook = book => dispatch => {
  axios.post(`${baseUrl}/${appId}/books/`, book).then(() => {
    dispatch(addBook(book));
  });
};

export const asyncDeleteBook = id => dispatch => {
  axios.delete(`${baseUrl}/${appId}/books/${id}`).then(response => {
    dispatch(deleteBook(id));
  });
};

export const asyncGetBooks = () => async dispatch => {
  await axios.get(`${baseUrl}/${appId}/books/`).then(response => {
    const books = [];
    [...Object.entries(response.data)].forEach(book => {
      const asyncBook = {
        item_id: book[0],
        title: book[1][0].title,
        category: book[1][0].category
      };
      books.push(asyncBook);
    });
    dispatch(getBooks(books));
  });
};
