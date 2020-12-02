import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const TripDetails = () => (
  <div>
    <Navbar />
    <div style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center', 'padding': '25px'}} >
      <p> Individual Trip Details will be here </p>
      <div>
        <button type="submit"> Edit </button>
        <button type="submit"> Delete </button>
      </div>
      <div>
        <button>
          <Link to="/dashboard"> Return to Dashboard </Link>
        </button>
      </div>
    </div>
  </div>
);


export default TripDetails;
