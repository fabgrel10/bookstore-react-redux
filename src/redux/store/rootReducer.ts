import { combineReducers } from 'redux';
import { booksReducer } from '../books/booksReducer';
import { categoriesReducer } from '../categories/categoriesReducer';

export const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer
});
