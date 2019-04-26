import React, { Component } from 'react';

import History from '../components/History';
import LegendPower from "../components/LegendPower";



class Home extends Component {
  render() {
    return (
      <div>
        <History />       
        <LegendPower />
      </div>
    );
  }
}

export default Home;
