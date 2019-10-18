import React from 'react';
import '../views/Destination.css';
import paris from '../images/paris.jpg';
import mexico from '../images/chichen-itza-mexico.jpg';
import sydney from '../images/sydney-opera-house.jpg';

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ start: event.target.start });
    this.setState({ end: event.target.end });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="destination">
        <h1> Where are you going? </h1>
        <div>
          <img src={paris} alt="eiffel tower" className="destination-images" />
          <img src={sydney} width="360" height="240" alt="sydney opera house" className="destination-images" />
          <img src={mexico} alt="chichen itza" height="240" width="360" className="destination-images" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
          From:
          <input type="text" start={this.state.start} onChange={this.handleChange} />
        </label>
          <label>
          To:
          <input type="text" end={this.state.end} onChange={this.handleChange} />
        </label>

        <br/>

          <button type="button" className="user-flow">
          <a href="/"> Back </a>
        </button>
          <button type="button" className="user-flow">
          <a href="/travel-dates"> Next </a>
        </button>

        {/* <input type="submit" className="user-flow" value="Next" /> */}

        {/* <a href="/travel-dates">
        </a> */}
        </form>
      </div>
    );
  }
}

export default Destination;
