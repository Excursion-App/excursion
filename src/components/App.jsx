import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Destination from './Destination';
import Existing from './Existing';
import Guests from './Guests';
import Home from './Home';
import TravelDates from './TravelDates';
import Authentication from './Authentication';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/excursion" exact component={Home} />
      <Route path="/auth" component={Authentication} />
      <Route path="/destination" component={Destination} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/existing" component={Existing} />
      <Route path="/guests" component={Guests} />
      <Route path="/travel-dates" component={TravelDates} />
    </div>
  </Router>
);

export default App;
