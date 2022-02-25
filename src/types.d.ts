type Data = {
  id: number;
  title: string;
};

type BooksState = {
  books: Array<Data>;
};

type CategoriesState = {
  categories: Array<Data>;
};

type BookAction = {
  type: string;
  payload: Data;
};
