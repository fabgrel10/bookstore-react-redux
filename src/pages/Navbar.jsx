import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="navbar__bookstore">Bookstore CMS</span>
      <Link to="/">
        <span className="navbar__books Text-Style-3">BOOKS</span>
      </Link>
      <Link to="/categories">
        <span className="navbar__categories Text-Style-3">CATEGORIES</span>
      </Link>
      <div className="navbar__user-container">
        <i
          className="fa fa-user navbar__user-icon fa-2x"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
