<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
import Calendar from './Calendar';
>>>>>>> 7ffe178b7af833d1defcfcc3e1be9d049cd6c7a8
import  '../views/TravelDates.css';

class TravelDates extends Component {
    render() {
        return (
            <div class="travel-dates">
                <h1> Travels Dates </h1>
                <h3> When are you planning on going?</h3>
<<<<<<< HEAD

                <div>

               
                <button>
                    <a href="/destination"> Back </a>  
=======
                <Calendar />
                <button>  
                    <a href="/guests"> Next </a> 
>>>>>>> 7ffe178b7af833d1defcfcc3e1be9d049cd6c7a8
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