import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import Destination from './Destination';
import Existing from './Existing';
import Guests from './Guests';
import Home from './Home';
import TravelDates from './TravelDates';

const initialState = {
  tripId: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE TRIP ID':
      return {
        tripId: state.tripId,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: 'UPDATE TRIP ID' });

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/excursion" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/existing" component={Existing} />
        <Route path="/guests" component={Guests} />
        <Route path="/travel-dates" component={TravelDates} />
      </div>
    </Router>
  </Provider>
);

export default App;
