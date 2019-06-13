import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Existing from './Existing'
import Home from './Home'
import NewTrip from './NewTrip'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/new-trip" component={NewTrip} />
          <Route path="/existing" component={Existing} />
        </Router>
      </div>
    )
  }
}

export default App;
