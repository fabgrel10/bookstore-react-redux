import { Link } from 'react-router-dom';

const BooksPage = () => {
  return (
    <div>
      <h1>Books Page</h1>
      <Link to="/categories">Categories</Link>
    </div>
  );
};

export default BooksPage;
