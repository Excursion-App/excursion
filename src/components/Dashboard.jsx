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
  }

  displayTrips() {
    const { trips } = this.state;
    return trips.map((el, index) => (
      <p key={index} onClick={this.displayTripDetails(el)}>
        {el.destination}
      </p>
    ));
    // {this.state.trips.map((el, indx) => (
    //   <p key={indx}>
    //     <span onClick={this.getTripDetails(el.destination)}> {el.destination} Trip </span>
    //   </p>
    // ))}
  }

  displayTripDetails(el) {
    console.log(el)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <div className="dashboard">
          <h1> Your Trips </h1>
          {this.displayTrips()}
        </div>
      </div>
    );
  }
}

export default Dashboard;
