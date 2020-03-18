import React from 'react';
import { Breadcrumb, Divider } from 'semantic-ui-react';
import '../views/Breadcrumb.css';
import { Link } from 'react-router-dom';


const sizes = ['large'];

const Breadcrumbs = () => (
  <div className="breadcrumbs">
    {sizes.map((size) => (
      <React.Fragment key={size}>
        <Breadcrumb size={size}>
          <Link to="/" className="list-item">
            <i className="fas fa-home" />
            Home
          </Link>
          <Breadcrumb.Divider icon="right arrow" />
          <Link to="/destination" className="list-item">
            <i className="fas fa-plane-arrival" />
            Destination
          </Link>
          <Breadcrumb.Divider icon="right arrow" />
          <Link to="/travel-dates" className="list-item">
            <i className="fas fa-calendar-alt" />
            Travel Dates
          </Link>
          <Breadcrumb.Divider icon="right arrow" />
          <Link to="/guests" className="list-item">
            <i className="fas fa-users" />
            Add Guests
          </Link>
          <Breadcrumb.Divider icon="right arrow" />
          <Link to="/dashboard" className="list-item">
            <i className="fas fa-money-check" />
            Dashboard
          </Link>
        </Breadcrumb>
        <Divider hidden />
      </React.Fragment>
    ))}
  </div>
);

export default Breadcrumbs;
