import React, { Component } from 'react';
import Navbar from './Navbar';
import '../views/Dashboard.css';
import firebase from '../firebase';
import Breadcrumbs from './Breadcrumbs';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  displayTrips() {
    const db = firebase.firestore();
    const tripsArr = [];

    db.collection('Trips').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tripsArr.push(doc.data());
      });
      this.setState({ trips: tripsArr });
    });

    return (
      <div>
        {this.state.trips.map((trip, index) => (
          <p key={index}>
            {trip.destination}
            trip
          </p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <h1 className="dashboard"> Your Trips </h1>
        {this.displayTrips()}
      </div>
    );
  }
}

export default Dashboard;
