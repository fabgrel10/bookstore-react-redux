import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddBook } from '../redux/books/actionCreators';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Fiction');

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  function submitBookToStore(e) {
    e.preventDefault();

    if (!title) {
      return;
    }

    const newBook = {
      item_id: nanoid(3),
      title,
      category
    };
    dispatch(asyncAddBook(newBook));
    setTitle('');
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
      <label htmlFor="category">Category:</label>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(x => (
          <option key={x.id}>{x.category}</option>
        ))}
      </select>
      <br />
      <button onClick={submitBookToStore}>Add Book</button>
    </form>
  );
};

export default BookForm;
