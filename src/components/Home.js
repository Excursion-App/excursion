import React from 'react';
import  '../views/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div class="home">
                <h1> The Excursion App </h1>
                <p> Group Vacations made easy. </p>
                <button>  
                    <a href="/destination"> Plan A New Trip </a> 
                </button>
            </div>
        )
    }
}

export default Home