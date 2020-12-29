import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../views/Dashboard.css';
import firebase from '../firebase';
import Breadcrumbs from './Breadcrumbs';
// import { findLastIndex } from 'lodash';

const db = firebase.firestore();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  tripDetails(destination) {
    // get the id of the specific trip that has been clicked on
    console.log('destination', destination.destination)
    // var docRef = db.collection('Trips').doc('here');

    // docRef.get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });
  }

  displayTrips() {
    const tripsArr = [];

    db.collection('Trips').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tripsArr.push(doc.data());
      });
      this.setState({ trips: tripsArr });
    });

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {this.state.trips.map((trip, index) => (
          <p key={index} style={{ margin: '25px' }}>
            <Link to="/tripDetails">
              {trip.destination}
              Trip
            </Link>
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
        <div className="dashboard">
          {/* {this.state.trips.map((trip, index) => (
            <p key={index}> {trip.destination} trip </p>
          ))} */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
