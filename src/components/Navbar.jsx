import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import '../views/Navbar.css';
import brand from '../images/excursion-logo.png';

// import authentication
// const defaultAuth = firebase.auth();
const user = firebase.auth().currentUser;

const Navbar = () => (
  <div>
    <div className="navbar">
      <Link to="/new-trip" className="brand">
        <img
          alt="brandName"
          className="brand"
          src={brand}
        />
      </Link>
      { console.log(user) }
      {/* {user ? (console.log('yess')) : (console.log('no'))} */}
      {/* if the user is not logged in they will see this:  */}
      <Link to="/auth" className="list" id="signup">
        <i className="fas fa-user-alt" />
        Sign up
      </Link>
      <Link to="/dashboard" className="list" id="login">
        <i className="fas fa-sign-in-alt" />
        Log in
      </Link>

      {/* if the user is logged in they will see this:  */}
      {/* <Link>
        Log Out
      </Link> */}
    </div>
  </div>
);

export default Navbar;
