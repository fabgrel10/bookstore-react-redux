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
    <div className="Bookstore-CMS">
      <div className="panel-bg">
        <Navbar />
        <div className="Line"></div>
        <BookList />
        <BookForm />
      </div>
    </div>
  );
};

export default BooksPage;
