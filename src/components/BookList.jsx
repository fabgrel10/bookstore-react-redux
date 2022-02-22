import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../redux/books/actionCreators';

const BookList = () => {
  const dispatch = useDispatch();
  const bookList = useSelector(state => state.books);

  function removeBook(id) {
    dispatch(deleteBook(id));
  }

  if (bookList.length === 0) {
    return <p>No books to display</p>;
  } else {
    return (
      <div>
        {bookList.map(book => (
          <div key={book.item_id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
            <button type="submit" onClick={() => removeBook(book.item_id)}>
              Remove Book
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default BookList;
