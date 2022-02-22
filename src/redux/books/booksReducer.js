import { ADD_BOOK, GET_BOOKS, REMOVE_BOOK } from './actionTypes';

const initialState = [];

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOKS:
      return state;
    case REMOVE_BOOK:
      return [...state.filter(book => book.item_id !== action.payload)];
    default:
      return state;
  }
};
