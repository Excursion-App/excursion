import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { findLastIndex } from 'lodash';
import firebase from '../firebase';
import Navbar from './Navbar';
import VerticalTab from './VerticalTab';
import '../views/Dashboard.css';

const db = firebase.firestore();

export default function Dashboard() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  const componentDidMount = () => {
    const tripsArr = [];

    db.collection('Trips').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tripsArr.push(doc.data());
      });
      this.setState({ trips: tripsArr });
    });
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        {/* <button type="button" className="user-flow"> */}
        {/* <Link to="/destination"> New Trip </Link> */}
        {/* </button> */}
        <div style={{ margin: '15px' }}>
          <span>
            <h3>
              Welcome Back,
              <br />
              Jaquisha!
            </h3>
          </span>
          <VerticalTab />
        </div>
        {/* {this.state.trips.map((trip) => (
          <ul>
            <li
              key={trip.id}
              onClick={this.details}>
              {trip.destination}
            </li>
          </ul>
        ))} */}
      </div>
    </div>
  );
}
