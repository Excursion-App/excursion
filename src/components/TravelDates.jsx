import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import firebase from '../firebase'
import '../views/TravelDates.css';  

class TravelDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({date})
    console.log(this.state.date)
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
            onChange={this.onChange}
            value={this.state.date}
            selectRange={true}
          />
          <div>
            <button type="button" className="user-flow">
              <a href="/destination"> Back </a>
            </button>

            <button type="button" className="user-flow">
              {/* <a href="/guests"> Next </a> */}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelDates;
