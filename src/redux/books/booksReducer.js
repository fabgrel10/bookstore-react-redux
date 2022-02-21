import { ADD_BOOK, GET_BOOKS, REMOVE_BOOK } from './actionTypes';

const initialState = [];

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOKS:
      return state;
    case REMOVE_BOOK:
      return state.books.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};
