import React from 'react';
import Destination from './Destination';
import Guests from './Guests';
import TravelDates from './TravelDates';
import Example from './Example';

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
        <Example name="Evelyn" />
        <Destination destCallback={(destInfo) => this.getDestData(destInfo)} />
        <Guests dataFromParent={this.state.destData} />
        <TravelDates destData={this.state.destData} tomato={'fruit'} />

      </div>
    );
  }
}

export default PlanningTrip;
