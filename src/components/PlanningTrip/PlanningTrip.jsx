import React from 'react';
import Destination from './Destination';
import Guests from './Guests';
import TravelDates from './TravelDates';

class PlanningTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destData: 'hello',
    };
  }

  getDestData(destInfo) {
    this.setState({ destData: destInfo });
  }

  render() {
    return (
      <div>
        <Destination destCallback={(destInfo) => this.getDestData(destInfo)} />
        <Guests dataFromParent={this.state.destData} />
        <TravelDates dataFromParent={this.state.destData} />
      </div>
    );
  }
}
