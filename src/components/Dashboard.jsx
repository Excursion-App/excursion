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

  componentDidMount() {
    const db = firebase.firestore();
    const tripsArr = [];
    db.collection('Trips').get().then(function (querySnapshot) {
      querySnapshot.forEach(function(doc) {
        tripsArr.push(doc.data());
      });
    });
    // this.setState({ trips: tripsArr});
    // return tripsArr.map((el, index) => (
    //   <p ket={index}>
    //     {el.destination}

    //   </p>
    // ));
    // {this.state.trips.map((el, indx) => {
    //   <p key={indx}>
    //     <span> {el.destination} Trip </span>
    //   </p>
    // })
    // }
  }

  // displayTrips() {
  //   const { trips } = this.state;
  //   return trips.map((el, index) => (
  //     <p key={index} onClick={this.displayTripDetails(el)}>
  //       {el.destination}
  //     </p>
  //   ));
  // {this.state.trips.map((el, indx) => (
  //   <p key={indx}>
  //     <span onClick={this.getTripDetails(el.destination)}> {el.destination} Trip </span>
  //   </p>
  // ))}

  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <h1> Your Trips </h1>
        {this.displayTrips()}
      </div>
    );
  }
}

export default Dashboard;
