import React, { useState, useEffect } from 'react';
import { Tab, TabList } from 'react-tabs';
import firebase from '../firebase';

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
      <TabList>
        { trips.map((trip) => <Tab key={trip.id}>{trip.destination}</Tab>) }
      </TabList>
    </div>
  );
}
