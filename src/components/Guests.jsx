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
      <div>
        <input type="text" placeholder="Name" style={{margin:"5px"}} />
        <input type="text" placeholder="Email" style={{margin:"5px"}} />
        <button type="submit"> Invite </button>
      </div>
      {/* <i className="fas fa-plus-circle" /> */}
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
