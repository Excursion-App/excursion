import React from 'react';
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
        <button
          type="submit"
          className="user-flow"
          style={{ marginTop: '23px' }}
        >
          Invite
        </button>
      </form>
      {/* <i className="fas fa-plus-circle" /> */}
      <br />
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
