import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import brand from '../images/excursion-logo.png';
import '../views/Beta.css';

class Beta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      success: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let input = this.state.input;
    // input[e.target.name] = e.target.value;

    this.setState({
      input: e.target.value,
    });
    // this.setState({ email: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const db = firebase.firestore();
    // const { email } = this.state;

    if (this.validate()) {
      const input = '';
      this.setState({ input });

      db.collection('Email-List').add({
        email: this.state.input,
      })
        .then(() => {
          this.setState({ success: 'Your email has been received. Thank you.' });
        })
        .catch((error) => {
          console.error('Error adding email please try again.');
        });
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input) {
      isValid = false;
      errors['email'] = 'Please enter your email address.';
    }

    if (typeof input !== 'undefined') {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input)) {
        isValid = false;
        errors['email'] = 'Please enter valid email address.';
      }
    }
    this.setState({
      errors,
    });

    return isValid;
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
          <div className="emailInputDiv">
            <input
              className="emailInput"
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              placeholder="jaquisha@excursion.com"
              // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
            />
            <button className="emailButton" type="submit" onClick={this.handleSubmit}> Request Early Access </button>
            <div className="text-danger">{this.state.errors.email}</div>
            <div className="success">{this.state.success}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Beta;
