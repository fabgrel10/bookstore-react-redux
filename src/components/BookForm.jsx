import { useState } from 'react';
import { useSelector } from 'react-redux';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookId, setBookId] = useState('');
  const [category, setCategory] = useState('Fiction');

  const categories = useSelector(state => state.categories);

  function submitBookToStore() {}

  function removeBook() {}

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
