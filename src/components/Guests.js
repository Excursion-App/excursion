import React, { Component } from 'react'
import  '../views/Guests.css';

class Guests extends Component {
  render() {
    return (
      <div class="guests">
        <h1> Who all coming? </h1>
        
        <div>
          <button>
            <a href="/travel-dates"> Back </a> 
          </button>
          <button>
            <a href="/dashboard"> Done </a> 
          </button>
        </div>
      </div>
    )
  }
}

export default Guests