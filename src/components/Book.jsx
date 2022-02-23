import { useDispatch } from 'react-redux';
import { asyncDeleteBook } from '../redux/books/actionCreators';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  function removeBookButton(id) {
    dispatch(asyncDeleteBook(id));
  }

  return (
    <li key={book.item_id}>
      <h3>{book.title}</h3>
      <p>{book.category}</p>
      <button type="submit" onClick={() => removeBookButton(book.item_id)}>
        Remove Book
      </button>
    </li>
  );
};

export default Book;
