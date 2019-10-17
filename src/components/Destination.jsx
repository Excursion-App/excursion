import React from 'react';
import '../views/Destination.css';
import '../images/paris.jpg';

const Destination = () => (
  <div className="destination">
    <h1> Where are you going? </h1>
    <div>
      <span>
        <img src="{paris.jpg}" alt="eiffel tower" />
      </span>
      <span> img of greece </span>
      <span> img of sydney </span>
    </div>
    <div className="destination">
      From:
      {' '}
      <input type="text" />
      {' '}
      To:
      {' '}
      <input type="text" />
    </div>

    <div>
      <button type="button">
        <a href="/"> Back </a>
      </button>

      <button type="button">
        <a href="/travel-dates"> Next </a>
      </button>
    </div>

  </div>
);


export default Destination;
