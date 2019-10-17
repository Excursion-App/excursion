import React, { Component } from 'react';
import  '../views/Home.css';

class Home extends Component {
    render() {
        return (
            <div class="home">
                <h1> Excursion App </h1>
                <p> Group Vacations made easy. </p>
                <button>  
                    <a href="/destination"> Plan A New Trip </a> 
                </button>
            </div>
        )
    }
}

export default Home