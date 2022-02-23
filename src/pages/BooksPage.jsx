import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { asyncGetBooks } from '../redux/books/actionCreators';
import Navbar from './Navbar';

const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetBooks());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <br />
      <BookList />
      <br />
      <BookForm />
    </div>
  );
};

export default BooksPage;
