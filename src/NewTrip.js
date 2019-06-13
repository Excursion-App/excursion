import React from 'react';
import Calendar from 'react-calendar';

class NewTrip extends React.Component {
    constructor(props) {
        super()
        this.state = {
          guestCount: 0,
          date: new Date()
        }
    }
    addGuest = (e) => {
      e.preventDefault()  
      this.setState({
        guestCount: this.state.guestCount + 1
      })
    }
    removeGuest = (e) => {
        e.preventDefault()
      this.setState({
        guestCount: this.state.guestCount - 1
      })
    }
    onChange = (date) => {
      this.setState({ date })
    }
    onSubmit() {

    }
    render() {
        return (
           <div>
                Plan A New Trip 
                <form>
                    Where are you going?
                    <input placeholder="destination"/>
                    <br />

                    When are you planning on going?
                    <Calendar
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                    {/* <input placeholder="dates" /> */}
                    <br />

                    {/* Where are you starting?
                    <input placeholder="Starting" />
                    <br /> */}

                    How many people are going? {this.state.guestCount}
                    <button onClick={this.addGuest}>Add Guest</button>
                    <button onClick={this.removeGuest}>Remove Guest</button>
                    <br />

                    {/* How are y'all getting there?
                    <input placeholder="" />
                    <br /> */}
                </form>
                <input type="submit" onClick={this.onSubmit} />
           </div> 
        )
    }
}

export default NewTrip