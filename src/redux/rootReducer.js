import { combineReducers } from 'redux';
import booksReducer from './books/booksReducer';
import categoriesReducer from './categories/categoriesReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export default rootReducer;
