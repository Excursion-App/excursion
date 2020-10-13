import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import '../views/TravelDates.css';
<<<<<<< HEAD:src/components/PlanningTrip/TravelDates.jsx
import Navbar from '../Navbar';
import Breadcrumbs from '../Breadcrumbs';
// import Example from
// import firebase from '../firebase'
// import '../views/TravelDates.css';  
=======
>>>>>>> 5af6393f9527ab471e749dca9266ac7a52861084:src/components/TravelDates.jsx

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
            <button type="button" className="user-flow">
              <a href="/destination"> Back </a>
            </button>


            <button type="button" className="user-flow">
              <a href="/guests"> Next </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelDates;
