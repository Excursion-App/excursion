import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import brand from '../images/excursions-2020.png';
import '../views/Beta.css';

class Beta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const db = firebase.firestore();
    const { email } = this.state;
    db.collection('Email-List').add({
      email,
    })
      .then((docRef) => {
        console.log('Email Successfully Added');
      })
      .catch((error) => {
        console.error('Error adding email please try again.');
      });
  }

  handleEndChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div className="wrapper">

        <div className="header">
          <Link to="/" className="brand">
            <img
              alt="brandName"
              className="brand"
              src={brand}
            />
          </Link>
          {/* <Link to="/excursion" className="betaButton">
            <i className="fas fa-sign-in-alt" />
            Beta List Sign In
          </Link> */}
        </div>
        <div className="body">
          <p className="betaTitle"> Group Travel Made Easy </p>
          <p className="betaTagline"> Take the hassle out of planning a group trip or vacation. </p>
          <div>
            <input
              className="emailInput"
              type="email"
              placeholder="jaquisha@excursion.com"
              onChange={this.handleEndChange}
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
            />
            <button className="emailButton" type="submit" onClick={this.handleSubmit}> Request Early Access </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Beta;
