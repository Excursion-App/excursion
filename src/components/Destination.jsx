import React, { Component } from 'react';
import * as _ from 'underscore';
import axios from 'axios';
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
// import { Dropdown } from 'semantic-ui-react';
import '../views/Destination.css';
import paris from '../images/paris.jpg';
import mexico from '../images/chichen-itza-mexico.jpg';
import sydney from '../images/sydney-opera-house.jpg';
import firebase from '../firebase';

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
    };
    this.handleStartThrottled = _.throttle(this.handleStartChange.bind(this), 100);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    firebase
      .firestore()
      .collection('Trips')
      .doc(this.state.end)
      .set({
        start: this.state.start,
        end: this.state.end,
      })
      .then(() => { console.log('Successfully created new trip!'); })
      .catch((error) => { console.error('Error creating new trip', error); });
  }

  handleStartChange(event) {
    console.log(event);
    this.setState({ start: event.target.value });

    axios({
      method: 'GET',
      url: 'https://wft-geo-db.p.rapidapi.com/v1/locale/locales',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': 'a62194236emsh5fea71981b5dd1bp1025fejsna249327b54d0',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error === 'Error: Request failed with status code 429') {
          console.log(`Our Error 429: ${error}`);
        } else {
          console.log(error);
        }
      });
  }

  handleEndChange(event) {
    this.setState({ end: event.target.value });
    console.log(this.state);
  }


  render() {
    let { start } = this.state;

    return (
      <>
        <Navbar />
        <Breadcrumb />
        <div className="destination">
          <h1> Top Destinations </h1>
          <div>
            <img src={paris} width="240" height="160" alt="eiffel tower" className="destination-images" />
            <img src={sydney} width="240" height="160" alt="sydney opera house" className="destination-images" />
            <img src={mexico} alt="chichen itza" width="240" height="160" className="destination-images" />


          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.start}
              placeholder="From?"
              required
              onChange={(e) => this.handleStartThrottled(e)}
            />
            {/* <Dropdown
            placeholder="Select Which"
            fluid
            search
            selection
            options={countryOptions}
          /> */}
            <input
              type="text"
              value={this.state.end}
              placeholder="To?"
              required
              onChange={this.handleEndChange}
            />

            <br />
            <button type="button" className="user-flow" onClick={this.handleSubmit}>
              <a href="/destination"> Next </a>
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Destination;

// function that sets state and calls handleStartThrottle
// remove set state from handleStartChange
// call new function with input on change.
// increase time
