<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
import { throttle } from lodash;
// import { Dropdown } from 'semantic-ui-react';
>>>>>>> 80457c7c78f8af6290d0e73f6289e34f37603357
import '../views/Destination.css';
import axios from 'axios';
import paris from '../images/paris.jpg';
import mexico from '../images/chichen-itza-mexico.jpg';
import sydney from '../images/sydney-opera-house.jpg';
import firebase from '../firebase.js';

<<<<<<< HEAD
class Destination extends Component {
  constructor(props) {
=======
class Destination extends React.Component {
  constructor(props) {  
>>>>>>> 80457c7c78f8af6290d0e73f6289e34f37603357
    super(props);
    this.state = {
      start: '',
      end: '',
    };
    this.handleInputThrottled = throttle(this.handleInput, 100)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleInput = event => {
    const value = event.target.value
    const filteredRes = data.filter((item)=> {
        // algorithm to search through the `data` array
    })
    this.setState({ start: filteredRes })
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
<<<<<<< HEAD
      })
      .then(() => { console.log('Successfully created new trip!'); })
      .catch((error) => { console.error('Error creating new trip', error); });
=======
      })
      .then(() => { console.log('Successfully created new trip!'); })
      .catch((error) => { console.error('Error creating new trip', error); });
  }

  handleStartChange(event) {
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
>>>>>>> 80457c7c78f8af6290d0e73f6289e34f37603357
  }

  handleEndChange(event) {
    this.setState({ end: event.target.value });
    console.log(this.state);
  }


  render() {
    let { start } = this.state;

    return (
      
      <div className="destination">
        <h1> Top Destinations </h1>
        <div>
          <img src={paris} width="240" height="160" alt="eiffel tower" className="destination-images" />
          <img src={sydney} width="240" height="160" alt="sydney opera house" className="destination-images" />
          <img src={mexico} alt="chichen itza" width="240" height="160" className="destination-images" />


        </div>
        <form onSubmit={this.handleSubmit}>
          <label className="formLabel">
            From:
<<<<<<< HEAD
=======
            <br />
>>>>>>> 80457c7c78f8af6290d0e73f6289e34f37603357
            <input
              type="text"
              value={this.state.start}
              required
<<<<<<< HEAD
              onChange={(event) => { this.setState({ start: event.target.value }); }}
=======
              onChange={this.handleStartChange}
>>>>>>> 80457c7c78f8af6290d0e73f6289e34f37603357
            />
          </label>
          {/* <Dropdown
            placeholder="Select Which"
            fluid
            search
            selection
            options={countryOptions}
          /> */}
          <label className="formLabel">
            To:
            <input
              type="text"
              value={this.state.end}
              required
<<<<<<< HEAD
              onChange={(event) => { this.setState({ end: event.target.value }); }}
=======
              onChange={this.handleEndChange}
>>>>>>> 80457c7c78f8af6290d0e73f6289e34f37603357
            />
          </label>

          <br />
          <button type="button" className="user-flow" onClick={this.handleSubmit}>
            <a href="/destination"> Next </a>
          </button>
        </form>
          <div className='autocomp_wrapper'>
                <input placeholder="Enter your search.." onChange={this.handleInputThrottled} />
                <div>
                    {start.map(result=>{start})}
                </div>
            </div>
      </div>
    );
  }
}

export default Destination;
