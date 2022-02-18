import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_BOOK, REMOVE_BOOK } from '../redux/books/actionTypes';

const BooksPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookId, setBookId] = useState('');

  const dispatch = useDispatch();

  function submitBookToStore(e: React.FormEvent) {
    e.preventDefault();
    const newBook = {
      id: nanoid(3),
      title,
      author
    };
    dispatch({ type: ADD_BOOK, payload: newBook });
    setTitle('');
    setAuthor('');
  }

  function removeBook(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: REMOVE_BOOK, payload: bookId });
    setBookId('');
  }

  return (
    <div>
      <h1>Books Page</h1>
      <Link to="/categories">Categories</Link>
      <br />
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
    </div>
  );
};

export default BooksPage;
