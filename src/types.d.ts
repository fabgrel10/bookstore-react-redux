type Book = {
  id: number;
  title: string;
  author: string;
};

type BookAction = {
  type: string;
  payload: Book & number;
};
