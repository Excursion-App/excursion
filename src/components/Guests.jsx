import React from 'react';
import '../views/Guests.css';

const Guests = () => (
  <div className="guests">
    <h1> Add your guests </h1>
    <div>
      <button type="button" className="user-flow">
        <a href="/travel-dates"> Back </a>
      </button>
      <button type="button" className="user-flow">
        <a href="/dashboard"> Done </a>
      </button>
    </div>
  </div>
);

export default Guests;
