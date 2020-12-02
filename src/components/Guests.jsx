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
      <form className="form-inline">
        <label htmlFor="name">
          Name:
          <br />
          <input
            type="text"
            placeholder="Jane Doe"
            size="25"
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <br />
          <input type="text" placeholder="jane.doe@hotmail.com" size="25" id="email" />
        </label>
        <Link to="/dashboard">
          <button
            type="submit"
            className="user-flow"
            style={{ marginTop: '23px' }}
          >
            Invite
          </button>
        </Link>
      </form>
      {/* <i className="fas fa-plus-circle" /> */}
      <br />
      <br />
      <div>
        <Link to="/travel-dates">
          <button type="button" className="user-flow">
            Back
          </button>
        </Link>
<<<<<<< HEAD
        <Link to="/dashboard">
          <button type="button" className="user-flow">
            Done
          </button>
        </Link>
=======
        <button type="button" className="user-flow">
          <a href="/dashboard"> Done </a>
        </button>
>>>>>>> c179e3b0a4634376310a15d18eda328a3630f9cf
      </div>
    </div>
  </>
);

export default Guests;
