import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookList = useSelector(state => state.books);

  if (bookList.length === 0) {
    return <p>No books to display</p>;
  } else {
    return (
      <>
        {bookList.map(book => (
          <Book book={book} key={nanoid()} />
        ))}
      </>
    );
  }
};

export default BookList;
