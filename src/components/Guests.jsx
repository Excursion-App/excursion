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
    const newGuest = {name: this.state.name, email: this.state.email}
    this.setState({
      name: this.state.name, 
      email: this.state.email,
      guests: [...this.state.guests, newGuest]})
    // Clearing Name & Email in input before next guest is added
    this.setState({
      name: '',
      email: ''
    });
  }
  showGuests() {
    return this.state.guests.map((guest) => {
      return (
        <tr>
          <td>{guest.name}</td>
          <td>{guest.email}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs /> 
        <div className="guests">
          <h1> Guests </h1>
          <p> To invite a guest, enter their name and email and we'll notify them to join your trip! </p>
          <table>
            <tbody>
              <tr>
                <th> Guest Name </th>
                <th> Email </th>
              </tr>
              {this.showGuests()}
            </tbody>
          </table>
          <br/>
          <form>
            <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleName} />
            <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleEmail} />
            <button onClick={this.handleClick}> Invite </button>
          </form>
        </div>
        {/* done or go to dashboard would also work here  */}
        <button> 
          <a href="/dashboard"> 
          Complete Trip 
          </a>
          </button>
      </div>
    )
  }
}

export default Guests;
