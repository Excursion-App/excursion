const express = require('express')
const app = express()
 /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
// MOCK ARRAY OF TRIPS
let trips = [
  {destination: 'Miami, FL', dates: [05152020, 05202020], guest: ['Stephanie', 'Nya', 'Erica']},
  {destination: 'Honolulu, HI', dates: [04142020, 04172020], guest: ['Nyapal', 'Nyakuoth']}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log('App listening on port 8000!')
})