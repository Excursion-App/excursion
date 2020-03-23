import React from 'react';
import '../views/Destination.css';
import paris from '../images/paris.jpg';
import mexico from '../images/chichen-itza-mexico.jpg';
import sydney from '../images/sydney-opera-house.jpg';
import firebase from '../firebase.js';

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
    };
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
    this.setState({ start: event.target.value });
    console.log(this.state);
  }
  
  handleEndChange(event) {
    this.setState({ end: event.target.value });
    console.log(this.state);
  }


  render() {
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
            <br />
            <input
              type="text"
              value={this.state.start}
              required
              onChange={this.handleStartChange}
            />
          </label>
          <label className="formLabel">
            To:
            <input
              type="text"
              value={this.state.end}
              required
              onChange={this.handleEndChange}
            />
          </label>

          <br />
          <button type="button" className="user-flow" onClick={this.handleSubmit}>
            <a href="/destination"> Next </a>
          </button>
        </form>
      </div>
    );
  }
}

export default Destination;
