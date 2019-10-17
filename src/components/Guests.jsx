import React from 'react';
import '../views/Guests.css';

const Guests = () => (
  <div className="guests">
    <h1> Who all coming? </h1>
    
    <div>
      <button type="button">
        <a href="/travel-dates"> Back </a> 
      </button>
      <button>
        <a href="/dashboard"> Done </a> 
      </button>
    </div>
  </div>
);

export default Guests;
