import React from 'react';
import '../views/Destination.css';
import paris from '../images/paris.jpg';
import mexico from '../images/chichen-itza-mexico.jpg';
import sydney from '../images/sydney-opera-house.jpg';

const Destination = () => (
  <div className="destination">
    <h1> Where are you going? </h1>
    <div>
      <img src={paris} alt="eiffel tower" className="destination-images" />
      <img src={sydney} width="360" height="240" alt="sydney opera house" className="destination-images" />
      <img src={mexico} alt="chichen itza" height="240" width="360" className="destination-images" />
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
