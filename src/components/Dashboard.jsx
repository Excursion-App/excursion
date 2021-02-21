import React, { useState, useEffect } from 'react';
import {
  Tabs, Tab, TabList, TabPanel,
} from 'react-tabs';
import firebase from '../firebase';
import Navbar from './Navbar';
import '../views/Dashboard.css';

const db = firebase.firestore();

export default function Dashboard() {
  const [trips, setList] = useState([]);

  useEffect(() => {
    db.collection('Trips').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setList((trip) => trip.concat(data));
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Tabs style={{ display: 'flex' }}>
          <TabList style={{ margin: '50px' }}>
            { trips.map((trip) => <Tab key={trip.id}>{trip.destination}</Tab>) }
          </TabList>
          { trips.map((trip) => (
            <TabPanel>
              <div key={trip.id}>
                {trip.destination}
              </div>
              <div>
                <input type="text" />
                <button type="submit"> Invite </button>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
