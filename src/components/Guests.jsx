import React, {Component} from 'react';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import '../views/Guests.css';
import { render } from 'react-dom';

class Guests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      guests: []
    };
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleName(event) {
    event.preventDefault();
    this.setState({ name: event.target.value });
  }
  handleEmail(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });
  }
  handleClick(event) {
    event.preventDefault();
    // let nextGuest = this.state.name, this.state.email
    this.state.guests.push({name: this.state.name, email: this.state.email})
    console.log(this.state.guests)
    // Clearing Name & Email in input before next guest is added
    this.setState({
      name: '',
      email: ''
    });
  }
  handleGuest() {
    // this function handles the guest table 
    console.log(this.state.guests.length)
  }
  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs /> 
        <div className="guests">
          <h1> Guests </h1>
          <p> To invite a guest, enter their name and email and we'll notify them to join your trip! </p>
          <table onChange={this.handleGuest}>
            <tr>
              <th> Name </th>
              <th> Email </th>
            </tr>
          </table>
          <form>
            <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleName} />
            <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleEmail} />
            <button onClick={this.handleClick}> Invite </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Guests;
