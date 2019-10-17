import React, {Component} from 'react';
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
                <h1> Travels Dates </h1>
                <h3> When are you planning on going?</h3>

                <Calendar 
                    onChange={this.onChage}
                    value={this.state.date}
                />

               
                <button>
                    <a href="/destination"> Back </a>  
                </button>
                
                <button>
                    <a href="/guests"> Next </a>  
                </button>

            </div>
        )
    }
}

export default TravelDates;