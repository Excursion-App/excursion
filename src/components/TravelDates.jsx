import React, { Component } from 'react';
import Calendar from 'react-calendar';
import  '../views/TravelDates.css';

class TravelDates extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    
    render() {
        return (
            <div class="travel-dates">
                <h1> Travel Dates </h1>
                <h3> When are you planning on going?</h3>

                <Calendar 
                    selectRange={this.onChange}
                    value={this.state.date}
                />
                <div className="button">
                    <button type="button" className="user-flow">
                        <a href="/destination"> Back </a>  
                    </button>
                
                    
                    <button type="button" className="user-flow">
                        <a href="/guests"> Next </a>  
                    </button>
                </div>
            </div>
        )
    }
}

export default TravelDates;
