import React, { Component } from 'react';
import Quagga from 'quagga';


class Scanner extends Component {

  componentDidMount() {

    Quagga.init({
        inputStream: {
            type : "LiveStream",
            constraints: {
                width: 1280,
                height: 720,
                facingMode: "environment" // or user
            }
        },
        locator: {
            patchSize: "medium",
            halfSample: true
        },
        numOfWorkers: (navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4),
        decoder: {
            readers : [ "ean_reader"]
        },
        frequency: ((navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4) * 10),
        locate: true
    }, function(err) {
        if (err) {
            return console.log(err);
        }
        Quagga.start();
    });
    Quagga.onDetected(this._onDetected);
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  }

  _onDetected = (result) => {
    this.props.onDetected(result);
  }

  render() {
    return (
      <div id="interactive" className="viewport"/>
    )
  }
}

export default Scanner
