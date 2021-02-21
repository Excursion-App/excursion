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
      console.log(this.state);

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
    const input = this.state;
    const errors = {};
    let isValid = true;

    if (!input) {
      isValid = false;
      errors.email = 'Please enter your email address.';
    }

    if (typeof input !== 'undefined') {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input)) {
        isValid = false;
        errors.email = 'Please enter a valid email address.';
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
          <div className="emailInputDiv" id="hidden-div">
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
            <button
              className="emailButton"
              type="submit"
              // onClick={() => {
                // this.handleSubmit.bind(this);
                // document.getElementById('hidden-div').style.display = 'none';
              // }}
              onClick={this.handleSubmit}
            >
              Request Early Access
            </button>
          </div>
          <div className="text-danger">{this.state.errors.email}</div>
          <div className="text-success">{this.state.success}</div>
          <Link
            className="typeform-share button"
            to="https://form.typeform.com/to/dZ5dZwOd?typeform-medium=embed-snippet"
            data-mode="popup"
            style={{
              display: 'inline-block', textDecoration: 'none', backgroundColor: '#1B2C5D', color: 'white', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '14px', lineHeight: '50px', textAlign: 'center', margin: 0, height: '50px', padding: '0px 5px', marginLeft: '21px', boxShadow: '0 50px 70px -20px #fff', borderRadius: '5px', width: '170px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale',
            }}
            data-size={100}
            target="_blank"
            rel="noopener noreferrer"
          >
            Take our survey
          </Link>

        </div>
      </div>
    );
  }
}

export default Beta;
