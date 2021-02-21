// Notes for Everlaw
// This is a project my and I have been working on for the past few weeks called Excursion
// Excursion is a group travel app
// On this page the user picks a destination and creates a new trip
// I chose this specific page to showcase my technical skills because prior to working on this project
// I had zero knowledge of firebase, I had to learn how create a new document and add it to the database

import React, { Component } from 'react';
import Navbar from './Navbar';
import firebase from '../firebase';
import '../views/Destination.css';
import Breadcrumbs from './Breadcrumbs';
import MultipleImages from './MultipleImages';

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const db = firebase.firestore();
    const { destination } = this.state;
    db.collection('Trips').add({
      destination: this.state.destination,
    })
      .then((docRef) => {
        docRef.update({ id: docRef.id });
        console.log(`${destination} Trip successfully created with ID ${docRef.id}`);
        this.props.history.push('/dashboard');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  handleEndChange(event) {
    this.setState({ destination: event.target.value });
  }

  render() {
    const { destination } = this.state;
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <div>
          <div>
            <h1 className="destination-title"> Top Destinations </h1>
            <MultipleImages />
          </div>
          <div className="centerize">
            <form className="form-inline" action="/travel-dates" onSubmit={this.handleSubmit}>
              <label htmlFor="endTo">
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
              <button type="submit" className="user-flow" style={{ marginTop: '23px' }}>
                <i className="fas fa-search-location" />
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Destination;
