
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import '../views/Navbar.css';
import brand from '../images/excursions-2020.png';

const Navbar = () => (
  <>
    <div className="navbar">
      <Link to="/" className="brand">
        <img
          alt="brandName"
          className="brand"
          src={brand}
        />
      </Link>
      <Link to="/dashboard" className="list" id="signup">
        <i className="fas fa-user-alt" />
        Sign up
      </Link>
      <Link to="/dashboard" className="list" id="login">
        <i className="fas fa-sign-in-alt" />
        Log in
      </Link>
    </div>
    <Breadcrumbs />
  </>
);

export default Navbar;
