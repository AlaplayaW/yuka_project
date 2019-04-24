import React, { Component } from 'react';
import Webcam from "react-webcam";
import History from '../components/History';
import LegendPower from "../components/LegendPower";
import InputGroup from "../components/InputGroup";
import ReactWebcam from '../barcode-scanner/react-webcam';


class Home extends Component {
  render() {
    return (
      <div>
        <History />       
        <InputGroup />
        <LegendPower />
      </div>
    );
  }
}

export default Home;
