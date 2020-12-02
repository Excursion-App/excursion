import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../views/Dashboard.css';
import firebase from '../firebase';
import Breadcrumbs from './Breadcrumbs';
import { findLastIndex } from 'lodash';

const db = firebase.firestore();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    firebase
      .firestore()
      .collection('Trips')
      .get()
      .then((querySnapshot) => {
        const Trips = [];

        querySnapshot.forEach((doc) => {
          console.log('doc', doc.id);
          Trips.push({
            destination: doc.data().end,
          });
        });
        this.setState({ trips: Trips });
      });
=======
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
>>>>>>> c179e3b0a4634376310a15d18eda328a3630f9cf
  }

  displayTrips() {
    let tripsArr = [];

    db.collection('Trips').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tripsArr.push(doc.data());
      });
      this.setState({ trips: tripsArr });
    });

    return (
      <div style={ {'display': 'flex', 'justifyContent': 'center'} }>
        {this.state.trips.map((trip, index) => (
          <p key={index} style={{'margin': '25px'}}> 
            <Link to="/tripDetails">
              {trip.destination} Trip
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
<<<<<<< HEAD
        <div className="dashboard">
          <h1> Your Trips </h1>
          {this.displayTrips()}
=======
        <h1 className="dashboard"> Your Trips </h1>
        {this.displayTrips()}
        <div className="dashboard">
          {/* {this.state.trips.map((trip, index) => (
            <p key={index}> {trip.destination} trip </p>
          ))} */}
>>>>>>> c179e3b0a4634376310a15d18eda328a3630f9cf
        </div>
      </div>
    );
  }
}

export default Dashboard;
