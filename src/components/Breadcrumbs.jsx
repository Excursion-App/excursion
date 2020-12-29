import React from 'react';
import { Link } from 'react-router-dom';
import '../views/Breadcrumb.css';

const Breadcrumbs = () => (

  <div id="breadcrumbs">
    <ul id="breadcrumb">
      <li>
        <Link to="/excursion">
          <i className="fas fa-home" />
          Home
        </Link>
      </li>
      <li>
        <Link to="/destination">
          <i className="fas fa-plane-arrival" />
          Destination
        </Link>
      </li>
      <li>
        {/* <Link to="/travel-dates">
          <i className="fas fa-calendar-alt" />
          Travel Dates
        </Link>
      </li>
      <li>
        <Link to="/guests">
          <i className="fas fa-users" />
          Add Guests
        </Link> */}
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-money-check" />
          Dashboard
        </Link>
      </li>
    </ul>
  </div>
);

export default Breadcrumbs;
