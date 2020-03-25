import React from 'react';
import { throttle } from 'lodash';
// import { Dropdown } from 'semantic-ui-react';
import '../views/Destination.css';
import axios from 'axios';
import Navbar from './Navbar';
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
      startCities: []
    };
    // this.handleInputThrottled = throttle(this.handleInput, 100)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleInput = event => {
    const value = event.target.value
    // const filteredRes = data.filter((item)=> {
    //     // algorithm to search through the `data` array
    // })

    // this.setState({ start: event.target.start })
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
    axios({
      "method":"GET",
      "url":"https://andruxnet-world-cities-v1.p.rapidapi.com/",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"andruxnet-world-cities-v1.p.rapidapi.com",
      "x-rapidapi-key":"a62194236emsh5fea71981b5dd1bp1025fejsna249327b54d0"
      },"params":{
      "query": this.state.start,
      // "searchby":"city"
      }
      })
      .then((response)=>{
        let cities = response.data.slice(0, 5)
        this.setState({ startCities: cities })
        console.log(this.state.startCities)
      })
      .catch((error)=>{
        console.log(error)
      })
    this.setState({ start: event.target.value });
  }



  handleEndChange(event) {
    this.setState({ end: event.target.value });
    console.log(this.state);
  }


  render() {
    // let cities = {response.data}
    return (
      <div>
        <Navbar />
      <div className="destination">
        <h1> Top Destinations </h1>
        <div>
          <img src={paris} width="240" height="160" alt="eiffel tower" className="destination-images" />
          <img src={sydney} width="240" height="160" alt="sydney opera house" className="destination-images" />
          <img src={mexico} alt="chichen itza" width="240" height="160" className="destination-images" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className="formLabel">
            <span style={{padding: "5px"}}> From: </span>
            <input type="text" 
            value={this.state.start} 
            placeholder="Where are you coming from?"
            onChange={this.handleStartChange}/>
          </label>
          <label className="formLabel">
            To:
            <input
              type="text"
              value={this.state.end}
              placeholder="Where would you like to go?"
              required
              onChange={this.handleEndChange}
            />
          </label>
          <br />
          <button type="button" className="user-flow" onClick={this.handleSubmit}>
            <a href="/destination"> Next </a>
          </button>
        </form>
        <div>
          <div className="item"> {this.props.cities} </div>
          <div className="item"> </div>
          <div className="item"> </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Destination;
