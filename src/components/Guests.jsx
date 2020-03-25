import React from 'react';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import '../views/Guests.css';

const Guests = () => (
  <>
    <Navbar />
    <Breadcrumbs />
    <div className="guests">
      <h1> Add your guests </h1>
      <i className="fas fa-plus-circle" />
      <br />
      <div>
        <button type="button" className="user-flow">
          <a href="/travel-dates"> Back </a>
        </button>
        <button type="button" className="user-flow">
          <a href="/dashboard"> Done </a>
        </button>
      </div>
    </div>
  </>
);

export default Guests;
