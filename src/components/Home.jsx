import React from 'react';
import '../views/Home.css';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Navbar from './Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className="home">
      <Breadcrumbs />
      <div className="home2">
        <h1 className="title"> EXCURSION </h1>
        <p> Group Travel Made Easy. </p>
        <button type="button" className="user-flow">
          <Link to="/destination"> Plan A New Trip </Link>
        </button>
      </div>
    </div>
  </ >
);

export default Home;
