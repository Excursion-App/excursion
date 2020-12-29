import React, { Component } from 'react';
// import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import firebase from '../firebase';
import 'react-calendar/dist/Calendar.css';
import '../views/TravelDates.css';

class TravelDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
      tripId: '8RMSwatGciueiHH73CA5',
      selectRange : true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // display the trip ID for the trip that was just created
  getDocument() {
    // {store.getState()}
    const db = firebase.firestore();
    
    var docRef = db.collection('Trips').doc('8RMSwatGciueiHH73CA5').update({
      "startDate": '11/11',
      "endDate": '11/18/2020'
    });
  }
  
  // get the document from the firebase database & update the document
  handleSubmit(event) {
    event.preventDefault();
  }

  onChange = (value: Date | Date[]) => {
    this.setState({ value });
    console.log('value', this.state.value)
    this.getDocument()
  }

  render() {
    const { date, selectRange } = this.state;
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <div className="travel-dates">
          <h1> Travel Dates </h1>
          <h3> When will you be traveling?</h3>
          <h4>(It's okay to estimate)</h4>

          <Calendar
            onChange={this.onChange}
            selectRange={selectRange}
            value={date}
          />
          <div>
            <Link to="/destination">
              <button type="button" className="user-flow">
                Back
              </button>
            </Link>

            <Link to="/guests">
              <button type="button" className="user-flow">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tripId: state.tripId,
});

export default connect(mapStateToProps)(TravelDates);
