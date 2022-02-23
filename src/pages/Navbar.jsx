import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h2>Bookstore</h2>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
  );
};

export default Navbar;
