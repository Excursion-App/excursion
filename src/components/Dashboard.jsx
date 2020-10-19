import React, { Component } from 'react';
import Navbar from './Navbar';
import '../views/Dashboard.css';
import firebase from '../firebase';
import Breadcrumbs from './Breadcrumbs';

class Dashboard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     trips: [],
  //   };
  // }

  displayTrips() {
    const db = firebase.firestore();
    let  trips = [];

    db.collection('Trips').get().then(function (querySnapshot) {
      querySnapshot.forEach(function(doc) {
        trips.push(doc.data());
        console.log(trips)
      });
    });

    // return (
    //   <div>
    //     hey
    //     {trips}
    //   </div>
    // )
}

  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <h1> Your Trips </h1>
        {/* <div>{this.state.trips.map((el, indx) => {
          return (
            <p key={indx}> {el} Trip </p>
          )
        })}</div> */}
      </div>
    );
  }
}

export default Dashboard;
