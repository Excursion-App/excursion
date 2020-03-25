import React from 'react';
import '../views/Home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => (
  <div>
    <Navbar />
    <div className="home">
      <div className="home2">
        <h1 className="title"> EXCURSION </h1>
        <p> Group Travel Made Easy. </p>
        <button type="button" className="user-flow">
          <Link to="/destination"> Plan A New Trip </Link>
        </button>
      </div>
    </div>
  </div>
);

export default Home;
