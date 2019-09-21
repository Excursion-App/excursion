import React from 'react';
import  './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div class="landing-page">
                <h1> The Excursion App </h1>
                <p> Group Vacations made easy. </p>
                <button>  
                    <a href="/new-trip"> Plan A New Trip </a> 
                </button>
            </div>
        )
    }
}

export default Home