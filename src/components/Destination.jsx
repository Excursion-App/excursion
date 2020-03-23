import React from 'react';
import '../views/Destination.css';
import paris from '../images/paris.jpg';
import mexico from '../images/chichen-itza-mexico.jpg';
import sydney from '../images/sydney-opera-house.jpg';
import firebase from '../firebase.js'

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    firebase
      .firestore()
      .collection('Trips')
      .doc(this.state.end)
      .set({
        start: this.state.start,
        end: this.state.end
      })
      .then(function() {console.log('Successfully created new trip!')})
      .catch(function(error) {console.error('Error creating new trip', error )})
  }

  render() {
    return (
      <div className="destination">
        <h1> Top Destinations </h1>
        <div>
          <img src={paris} width="240" height="160" alt="eiffel tower" className="destination-images" />
          <img src={sydney} width="240" height="160" alt="sydney opera house" className="destination-images" />
          <img src={mexico} alt="chichen itza" width="240" height="160" className="destination-images" />
          <img src="url(https://source.unsplash.com/240x160/?travel)" alt="" width="240" height="160" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className="formLabel">
            From:
            <input 
              type="text" 
              value={this.state.start} 
              required
              onChange={(event) => {this.setState({start: event.target.value})}} 
          />
          </label>
          <label className="formLabel">
            To:
            <input 
              type="text" 
              value={this.state.end} 
              required
              onChange={(event) => {this.setState({end: event.target.value})}} 
          />
          </label>

          <br/>
          <button type="button" className="user-flow" onClick={this.handleSubmit}> Next </button>
        </form>
      </div>
    );
  }
}

export default Destination;
