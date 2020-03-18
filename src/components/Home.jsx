import React from 'react';
import '../views/Home.css';

const Home = () => (

  <div className="home">
    <div className="home2">
      <h1> Excursion </h1>
      <p> Group Vacations made easy. </p>
      <button type="button" className="user-flow">
        <a href="/destination"> Plan A New Trip </a>
      </button>
    </div>
  </div>
);

export default Home;
