import React, { Component } from 'react';
import '../views/TravelDates.css';

class TravelDates extends Component {
    render() {
        return (
            <div class="travel-dates">
                <h1> Travels Dates </h1>
                <h3> When are you planning on going?</h3>

                <div>

               
                <button>
                    <a href="/destination"> Back </a>  
                </button>
                
                <button>
                    <a href="/guests"> Next </a>  
                </button>

                </div>
            </div>
        )
    }
}

export default TravelDates;