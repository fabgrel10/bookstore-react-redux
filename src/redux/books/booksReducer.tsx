import { ADD_BOOK, REMOVE_BOOK } from './actionTypes';

const initialState: Book[] = [];

export const booksReducer = (
  state: Book[] = initialState,
  action: BookAction
): Book[] => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};
