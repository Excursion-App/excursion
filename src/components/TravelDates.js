import React from 'react';
import  '../views/TravelDates.css';

class TravelDates extends React.Component {
    render() {
        return (
            <div class="travel-dates">
                <h1> Travels Dates </h1>
                <h3> When are you planning on going?</h3>
                <button>  
                    <a href="/guests"> Next </a> 
                </button>
            </div>
        )
    }
}

export default TravelDates;