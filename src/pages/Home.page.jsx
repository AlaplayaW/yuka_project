import React, { Component } from 'react';

import History from '../components/History';
import LegendPower from "../components/LegendPower";
import Layout from "../components/Layout"


class Home extends Component {
  render() {
    return (
      <Layout>
        <History />       
        <LegendPower />
      </Layout>
    );
  }
}

export default Home;
