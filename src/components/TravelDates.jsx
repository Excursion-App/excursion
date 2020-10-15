import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import '../views/TravelDates.css';

class TravelDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
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
            selectRange={this.handleSubmit}
            value={this.state.date}
          />
          <div>
            <Link to="/destination">
              <button type="button" className="user-flow">
                Back
              </button>
            </Link>

            <Link href="/guests">
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

export default TravelDates;
