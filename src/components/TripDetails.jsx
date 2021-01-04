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


// console.log(trip.id)
    // get the id of the specific trip that has been clicked on
    // console.log('destination', destination.destination)

    // var docRef = db.collection('Trips').doc('here');

    // docRef.get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });
