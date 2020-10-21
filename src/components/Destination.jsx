import React, { Component } from 'react';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import firebase from '../firebase';
import paris from '../images/paris.jpg';
// import mexico from '../images/chichen-itza-mexico.jpg';
// import sydney from '../images/sydney-opera-house.jpg';
import '../views/Destination.css';

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      tripId: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const db = firebase.firestore();
    const { destination, origin } = this.state;
    db.collection('Trips').add({
      destination,
      origin,
    })
      .then((docRef) => {
        console.log(`${destination} Trip successfully created with ID ${docRef.id}`);
        this.setState({ tripId: docRef.id });
        // store.dispatch('UPDATE TRIP ID'(docRef.id))
        //update the id & add it to redux 
        this.props.history.push('/travel-dates');
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
    const { origin, destination } = this.state;
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <div className="destination">
          <h1> Top Destinations </h1>
          <div>
            <img src={paris} width="240" height="160" alt="eiffel tower" className="destination-images" />
            {/* <img src={sydney} width="240" height="160" alt="sydney opera house" className="destination-images" /> */}
            {/* <img src={mexico} alt="chichen itza" width="240" height="160" className="destination-images" />  */}
          </div>
          <form className="form-inline" action="/travel-dates" onSubmit={this.handleSubmit}>
            <label htmlFor="startFrom">
              From:
              <br />
              <input
                type="text"
                id="startFrom"
                value={origin}
                required
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
                value={destination}
                required
                placeholder="Where would you like to go?"
                onChange={this.handleEndChange}
                size="25"
              />
            </label>

            <button type="submit" className="button">
              <i className="fas fa-search-location" />
              {' '}
              Next
            </button>
          </form>
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
