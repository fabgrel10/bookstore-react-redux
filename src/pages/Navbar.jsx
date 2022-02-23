import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="navbar__bookstore">Bookstore CMS</span>
      <Link to="/">
        <span className="books Text-Style-3">BOOKS</span>
      </Link>
      <Link to="/categories">
        <span className="categories Text-Style-3">CATEGORIES</span>
      </Link>
    </div>
  );
};

export default Navbar;
