const initialState: BooksState = {
  books: []
};

export const booksReducer = (
  state: BooksState = initialState,
  action: BookAction
) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id)
      };
    default:
      return state;
  }
};
