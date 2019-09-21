import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Dashboard from './Dashboard'
import Destination from './Destination'
import Existing from './Existing'
import Guests from './Guests'
import Home from './Home'
import TravelDates from './TravelDates'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/destination" component={Destination} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/existing" component={Existing} />
          <Route path="/guests" component={Guests} />
          <Route path="/travel-dates" component={TravelDates} />
        </Router>
      </div>
    )
  }
}

export default App;
