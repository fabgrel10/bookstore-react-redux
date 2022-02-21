import { Link } from 'react-router-dom';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const BooksPage = () => {
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
