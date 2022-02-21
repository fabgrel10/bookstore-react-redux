import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/actionCreators';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookId, setBookId] = useState('');
  const [category, setCategory] = useState('Fiction');

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  function submitBookToStore(e) {
    e.preventDefault();

    if (!title || !author) {
      return;
    }

    const newBook = {
      item_id: nanoid(3),
      title,
      author,
      category
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  }

  function removeBook(e) {
    e.preventDefault();
    dispatch(bookId);
    setBookId('');
  }

  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        id="author"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <br />
      <label htmlFor="category">Category:</label>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(x => (
          <option key={x.id}>{x.category}</option>
        ))}
      </select>
      <br />
      <button onClick={submitBookToStore}>Add Book</button>
      <br />
      <input
        type="text"
        name="remove-book"
        id="remove-book"
        placeholder="Enter an ID"
        value={bookId}
        onChange={e => setBookId(e.target.value)}
      />
      <br />
      <button type="submit" onClick={removeBook}>
        Remove Book
      </button>
    </form>
  );
};

export default BookForm;
