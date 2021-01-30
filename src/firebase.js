// src/firebase.js
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB9X-NhKNajwpomlHsJQcbCjO21JQ_gpdQ',
  authDomain: 'the-excursion-app.firebaseapp.com',
  databaseURL: 'https://the-excursion-app.firebaseio.com',
  projectId: 'the-excursion-app',
  storageBucket: 'the-excursion-app.appspot.com',
  messagingSenderId: '681242528961',
  appId: '1:681242528961:web:c55b599cb56ef6933a9840',
  measurementId: 'G-NBSDW23LL0',
});

// const fire = firebase.initializeApp(firebaseApp);
// export default fire;
const db = firebaseApp.firestore();
export default firebase;
export { db };
