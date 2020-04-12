import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Navbar from '../Navbar';
import Breadcrumbs from '../Breadcrumbs';
// import '../views/TravelDates.css';

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
    // add this info to the existing document 
    //firebase. set (merge: true )
    console.log(this.state);
  }

  render() {
    console.log(this.state)
    console.log(this.props.destData);

    return (
      <div>
          <Navbar />
          <Breadcrumbs />
        <div className="travel-dates">
          <h1> Travel Dates </h1>
          <h3> When are you planning on going?</h3>
          {/* <h3> yes {this.props.dataFromParent} </h3> */}

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
