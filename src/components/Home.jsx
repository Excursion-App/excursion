import React from 'react';
import '../views/Home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// import brand from '../images/excursions-2020.png';

const Home = () => (
  <div>
    <Navbar />
    <div className="home">
      <div className="home2">
        <h1 id="title"> EXCURSION </h1>
        {/* <Link to="/" className="brand">
          <img
            alt="brandName"
            className="brand"
            src={brand}
          />
        </Link> */}
        <h2 inputMode="tagline"> Group Travel Made Easy. </h2>
        <Link to="/destination">
          <button type="button" className="user-flow">
            Plan A New Trip
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
