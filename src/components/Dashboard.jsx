import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findLastIndex } from 'lodash';
import Navbar from './Navbar';
import firebase from '../firebase';
import '../views/Dashboard.css';

const db = firebase.firestore();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      details: {},
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

  details() {
    console.log('fuck this')
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="dashboard">
          <h3 style={{'padding': '50px 0px 0px 25px'}}> Upcoming Trips </h3>
          {this.state.trips.map((trip) => (
            <ul>
              <li 
                key={trip.id} 
                onClick={console.log(trip)}> 
                {trip.destination} Trip 
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
