import React, { useState, useEffect } from 'react';
import {
  Tabs, Tab, TabList, TabPanel,
} from 'react-tabs';
import firebase from '../firebase';
import 'react-tabs/style/react-tabs.css';

const db = firebase.firestore();

export default function VerticalTabs() {
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
      <Tabs>
        <TabList>
          { trips.map((trip) => <Tab key={trip.id}>{trip.destination}</Tab>) }
        </TabList>
        { trips.map((trip) => (
          <TabPanel>
            <div key={trip.id}>
              {trip.destination} Trip
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
