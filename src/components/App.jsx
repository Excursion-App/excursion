import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import PlanningTrip from './PlanningTrip/PlanningTrip';
import Destination from './PlanningTrip/Destination';
import Existing from './Existing';
import Guests from './PlanningTrip/Guests';
import Home from './Home';
import TravelDates from './PlanningTrip/TravelDates';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: [],
      dates: [],
      guests: []
    }
  }

  render() {
    return (

      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/excursion" component={Home} />
          <Route path="/destination" component={Destination} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/existing" component={Existing} />
          <Route path="/guests" component={Guests} />
          <Route 
            path="/travel-dates"
            render={() => <TravelDates destData="San Francisco, CA" tomato="Fruit" />} />
          {/* <PlanningTrip /> */}
        </div>
      </Router>
    )
  }
}
// const App = () => (
//   <div>

//     function destData() {
//       return 
//     }
//   </div>
// );

export default App;
