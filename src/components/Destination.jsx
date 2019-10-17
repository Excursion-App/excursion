import React from 'react';
import '../views/Destination.css';
import paris from '../images/paris.jpg';
import egypt from '../images/pyramids.jpg';
import sydney from '../images/sydney.jpg';

const Destination = () => (
  <div className="destination">
    <h1> Where are you going? </h1>
    <div>
      <span>
        <img src={paris} alt="eiffel tower" />
      </span>
      <span>
        <img src={egypt} alt="egypt pyramids" />
      </span>
      <span>
        <img src={sydney} alt="sydney opera house" />
      </span>
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
