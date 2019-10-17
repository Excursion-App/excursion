import React from 'react';
import '../views/TravelDates.css';

const TravelDates = () => (
  <div className="travel-dates">
    <h1> Travel Dates </h1>
    <h3> When are you planning on going?</h3>

    <div>


      <button type="button">
        <a href="/destination"> Back </a>
      </button>

      <button type="button">
        <a href="/guests"> Next </a>
      </button>

    </div>
  </div>
);
export default TravelDates;
