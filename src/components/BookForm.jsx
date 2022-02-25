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
    <div className="form__container">
      <form className="form">
        <label htmlFor="title" className="form__label-title">
          ADD NEW BOOK
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Book title"
          className="form__input-title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <select
          className="form__select-category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(x => (
            <option key={x.id}>{x.category}</option>
          ))}
        </select>
        <button className="form_button" onClick={submitBookToStore}>
          <span className="form_span-button Text-Style">ADD BOOK</span>
        </button>
      </form>
    </div>
  );
};

export default BookForm;
