import React, { Component } from 'react';
import Navbar from './Navbar';
import '../views/Home.css';
import firebase from '../firebase';
// import { Link } from 'react-router-dom';
// import brand from '../images/excursions-2020.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripId: {}
    };
  }

  createNewTrip() {
    const db = firebase.firestore();
    const newTripRef = db.collection('Trips').doc();
    const yes = {'name': 'no'}
    newTripRef.set(yes)
    this.setState({ tripId: newTripRef})
    // db.collection('Trips').add();
    console.log('yass bby');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="home">
          <div className="home2">
            <h1 id="title"> EXCURSION </h1>
            <h2 inputMode="tagline"> Group Travel Made Easy. </h2>
            <button type="button" className="user-flow" onClick={this.createNewTrip()}>
              Plan A New Trip
              {/* <Link to="/destination"> Plan A New Trip </Link> */}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
