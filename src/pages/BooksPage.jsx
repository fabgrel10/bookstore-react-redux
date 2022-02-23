import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { asyncGetBooks } from '../redux/books/actionCreators';

const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetBooks());
  }, [dispatch]);

  return (
    <div>
      <h2>Books Page</h2>
      <Link to="/categories">Categories</Link>
      <br />
      <br />
      <BookList />
      <br />
      <BookForm />
    </div>
  );
};

export default BooksPage;
