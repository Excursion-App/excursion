import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import '../views/Guests.css';

const Guests = () => (
  <>
    <Navbar />
    <Breadcrumbs />
    <div className="guests">
      <h1> Add Your Guests </h1>
      <i className="fas fa-plus-circle" />
      <br />
      <div>
        <Link to="/travel-dates">
          <button type="button" className="user-flow">
            Back
          </button>
        </Link>
        <Link to="/dashboard">
          <button type="button" className="user-flow">
            Done
          </button>
        </Link>
      </div>
    </div>
  </>
);

export default Guests;
