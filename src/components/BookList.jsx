import { useSelector } from 'react-redux';

const BookList = () => {
  const bookList = useSelector(state => state.books);

  if (bookList.length === 0) {
    return <p>No books to display</p>;
  } else {
    return (
      <div>
        {bookList.map(book => (
          <div key={book.item_id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default BookList;
