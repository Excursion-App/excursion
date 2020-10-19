import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../views/Destination.css';
// import { Textbox } from 'react-inputs-validation';
import Navbar from './Navbar';
import paris from '../images/paris.jpg';
// import mexico from '../images/chichen-itza-mexico.jpg';
// import sydney from '../images/sydney-opera-house.jpg';
import firebase from '../firebase';
import Breadcrumbs from './Breadcrumbs';


class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      tripId: '',
    };
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
    const {
      origin, destination, cities,
    } = this.state;
    return (
      <div>
        <Navbar />
        <Breadcrumbs />

        <div className="destination">
          <h1> Top Destinations </h1>
          <div>
            <img src={paris} width="240" height="160" alt="eiffel tower" className="destination-images" />
            {/* <img src={sydney} width="240" height="160" alt="sydney opera house" className="destination-images" />
            <img src={mexico} alt="chichen itza" width="240" height="160" className="destination-images" /> */}
          </div>

          <form className="form-inline" action="/travel-dates" onSubmit={this.handleSubmit}>
            <label htmlFor="startFrom">
              From:
              <br />
              {/* <Textbox
                attributesInput={{
                  id: 'startFrom',
                  name: 'Name',
                  type: 'text',
                  placeholder: 'Where are you coming from?',
                  size: '25',
                }}
                value={origin} // Optional.[String].Default: "".
                onChange={this.handleStartChange}
                onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                validationOption={{
                  origin: 'Origin', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                  check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                  required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                }}
              /> */}
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
              {/* <Textbox
                attributesInput={{
                  id: 'startFrom',
                  name: 'Name',
                  type: 'text',
                  placeholder: 'Where would you like to go?',
                  size: '25',
                }}
                value={destination} // Optional.[String].Default: "".
                onChange={this.handleStartChange}
                onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                validationOption={{
                  destination: 'Destination',
                  check: true,
                  required: true,
                }}
              /> */}
            </label>

            <button type="button" className="button">
              <Link to="/travel-dates">
                <i className="fas fa-search-location" />
                Next
              </Link>
            </button>
          </form>

          <div>
            <div className="item">
              {cities}
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
