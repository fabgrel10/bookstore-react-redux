import { useDispatch } from 'react-redux';
import circularProgress from '../assets/images/circular_progress_bar.png';
import { asyncDeleteBook } from '../redux/books/actionCreators';

const authors = [
  'Suzanne Collins',
  'J.K. Rowling',
  'J.R.R. Tolkien',
  'Stephen King',
  'Frank Herbert'
];
const author = authors[Math.floor(Math.random() * authors.length)];

const Book = ({ book }) => {
  const dispatch = useDispatch();

  function removeBookButton(id) {
    dispatch(asyncDeleteBook(id));
  }

  return (
    <div key={book.item_id} className="book">
      <div className="book-col-1">
        <div className="book__category">{book.category}</div>
        <div className="book__title">{book.title}</div>
        <div className="book__author">{author}</div>
        <div book__buttons-container>
          <button className="book__buttons book__buttons">edit</button>
          <span className="book__buttons">|</span>
          <button
            className="book__buttons book__buttons"
            type="submit"
            onClick={() => removeBookButton(book.item_id)}
          >
            remove
          </button>
          <span className="book__buttons">|</span>
          <button className="book__buttons book__buttons">comment</button>
        </div>
      </div>
      <div div className="book-col-2">
        <img
          src={circularProgress}
          className="book__progress-img"
          alt="Book Progress"
        />
        <div>
          <p className="book__progress">64%</p>
          <p className="book__progress-status">Completed</p>
        </div>
      </div>
      <div className="book-col-3">
        <p className="book__current-chapter">Current Chapter</p>
        <p className="book__chapter-number">Chapter 17</p>
        <button className="book__update-progress-button">
          <span className="book__update-progress-span">UPDATE PROGRESS</span>
        </button>
      </div>
    </div>
  );
};

export default Book;
