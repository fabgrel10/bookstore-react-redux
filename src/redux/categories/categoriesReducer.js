const initialState = [
  {
    id: 1,
    category: 'Fiction',
  },
  {
    id: 2,
    category: 'Non-Fiction',
  },
  {
    id: 3,
    category: 'Mystery',
  },
  {
    id: 4,
    category: 'Horror',
  },
  {
    id: 5,
    category: 'Romance',
  },
];
const categoriesReducer = (state = initialState) => state;

export default categoriesReducer;
