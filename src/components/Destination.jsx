import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../views/Destination.css';
import Navbar from './Navbar';
import paris from '../images/paris.jpg';
import mexico from '../images/chichen-itza-mexico.jpg';
import sydney from '../images/sydney-opera-house.jpg';
import firebase from '../firebase';
import Breadcrumbs from './Breadcrumbs';

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      tripId: ''
    };
    // this.handleStartThrottled = _.throttle(this.handleStartChange.bind(this), 100);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const db = firebase.firestore();
    db.collection('Trips').add({
      destination: this.state.destination,
      origin: this.state.origin,
    })
      .then((docRef) => {
        console.log(`${this.state.destination} Trip successfully created with ID ${docRef.id}`);
        this.setState({ tripId: docRef.id });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  handleStartChange(event) {
    this.setState({ origin: event.target.value });
  }


  handleEndChange(event) {
    this.setState({ destination: event.target.value });
  }


  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <div className="destination">
          <h1> Top Destinations </h1>
          <div>
            <img src={paris} width="240" height="160" alt="eiffel tower" className="destination-images" />
            <img src={sydney} width="240" height="160" alt="sydney opera house" className="destination-images" />
            <img src={mexico} alt="chichen itza" width="240" height="160" className="destination-images" />
          </div>

          <form className="form-inline" action="/action_page.php" onSubmit={this.handleSubmit}>
            <label htmlFor="startFrom">
              From:
              <br />
              <input
                type="text"
                id="startFrom"
                value={this.state.origin}
                placeholder="Where are you coming from?"
                onChange={this.handleStartChange}
                size="25"
              />
            </label>

            <label htmlFor="endTo">
              To:
              <br />
              <input
                type="text"
                id="endTo"
                value={this.state.destination}
                placeholder="Where would you like to go?"
                onChange={this.handleEndChange}
                size="25"
              />
            </label>

            <button type="button" className="button" onClick={this.handleSubmit}>
              <Link to="/travel-dates">
                <i className="fas fa-search-location" />
                Next
              </Link>
            </button>

          </form>

          <div>
            <div className="item">
              {' '}
              {this.props.cities}
              {' '}
            </div>
            <div className="item"> </div>
            <div className="item"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Destination;

// function that sets state and calls handleStartThrottle
// remove set state from handleStartChange
// call new function with input on change.
// increase time
