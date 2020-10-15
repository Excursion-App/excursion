import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import '../views/TravelDates.css';

class TravelDates extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //     tripId: ""
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleSubmit(event) {
    event.preventDefault();
  }

  logState() {
    console.log('hi');
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
            // value={this.state.date}
          />
          <div>
            <button type="button" className="user-flow">
              <a href="/destination"> Back </a>
            </button>

            <button type="button" onClick={this.logState()}> Log State </button>


            <button type="button" className="user-flow">
              <a href="/guests"> Next </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tripId: state.tripId 
})

export default connect(mapStateToProps)(TravelDates);
