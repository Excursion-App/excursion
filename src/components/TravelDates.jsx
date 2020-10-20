import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import '../views/TravelDates.css';

class TravelDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      tripId: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs />
        <div className="travel-dates">
          <h1> Travel Dates </h1>
          <h3> When are you planning on going?</h3>

          <Calendar
            selectRange={true}
            value={this.state.date}
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
