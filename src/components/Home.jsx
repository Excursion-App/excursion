import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../views/Home.css';

const Home = () => (
  <div>
    <Navbar />
    <div className="home">
      <div className="home2">
        <h1 id="title"> EXCURSION </h1>
        <h2 inputMode="tagline"> Group Travel Made Easy. </h2>
        <button type="button" className="user-flow">
          <Link to="/destination"> Plan A New Trip </Link>
        </button>
      </div>
    </div>
  </div>
);

export default Home;
