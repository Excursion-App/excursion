import React from 'react'
import  '../views/Guests.css';

class Guests extends React.Component {
  render() {
    return (
      <div class="guests">
        <h1> Add Guest </h1>
        <button>
          <a href="/dashboard"> Skip </a> 
        </button>
        <button>
          <a href="/dashboard"> Done </a> 
        </button>
        
      </div>
    )
  }
}

export default Guests