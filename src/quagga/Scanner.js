import React, { Component } from 'react';
import Quagga from 'quagga';
import './Scanner.css'


class Scanner extends Component {

  componentDidMount() {

    Quagga.init({
        inputStream: {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#interactive'),
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
        // Adjust workers depending on user's CPU cores number
        numOfWorkers: (navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4),
        decoder: {
            readers : [ "ean_reader"]
        },
        // Adjust scan frequency depending on user's CPU cores number
        frequency: ((navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4) * 5),
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
      <>
        <div className="container">
        <div id="interactive" className="viewport">
        <video autoPlay={true} preload="auto" src="" muted={true} playsInline={true}></video>
        <canvas id="canvas" className="drawingBuffer"></canvas>
        </div>
        </div>
      </>
    )
  }
}

export default Scanner
