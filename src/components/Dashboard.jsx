import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findLastIndex } from 'lodash';
import Breadcrumbs from './Breadcrumbs';
import Navbar from './Navbar';
import firebase from '../firebase';
import '../views/Dashboard.css';

const db = firebase.firestore();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  componentDidMount() {
    const tripsArr = [];

    db.collection('Trips').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tripsArr.push(doc.data());
      });
      this.setState({ trips: tripsArr });
    });
  }

  // tripDetails(destination) {
    // get the id of the specific trip that has been clicked on
    // console.log('destination', destination.destination)

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
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <h1 className="dashboard"> Your Trips </h1>
        <div className="dashboard">
          {this.state.trips.map((trip, index) => (
            <ul>
              <li key={index}> {trip.destination} Trip </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
