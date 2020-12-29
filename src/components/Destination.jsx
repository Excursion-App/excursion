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
      // origin: '',
      destination: '',
      tripId: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const db = firebase.firestore();
    const { destination,} = this.state;
    db.collection('Trips').add({
      destination: this.state.destination,
      // origin: this.state.origin,
    })
      .then((docRef) => {
        console.log(`${destination} Trip successfully created with ID ${docRef.id}`);
        this.setState({ tripId: docRef.id });
        // store.dispatch('UPDATE TRIP ID'(docRef.id))
        //update the id & add it to redux 
        this.props.history.push('/dashboard');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  // handleStartChange(event) {
  //   this.setState({ origin: event.target.value });
  // }

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
            <h1> Top Destinations </h1>
            <MultipleImages />
          </div>
          <div className="centerize">
            <form className="form-inline" action="/travel-dates" onSubmit={this.handleSubmit}>
              {/* <label htmlFor="startFrom">
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
              </label> */}

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

// function that sets state and calls handleStartThrottle
// remove set state from handleStartChange
// call new function with input on change.
// increase time
