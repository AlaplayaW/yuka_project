import React, { Component } from 'react';
import Scanner from './Scanner';
import {Redirect} from "react-router-dom";
import './Quagga.css'


class Quagga extends Component {
constructor(props){
  super(props);
  this.state = {
    scanning: false,
    results: [],
    bestResult: null,
    numberOfScans: 0
  }
}

  _scan = () => {
    this.setState({scanning: !this.state.scanning});
  }


  // Most occuring barcode function
  bestBarcode = (array) => {

    if(array.length === 0)
        return null;
    let modeMap = {};
    let maxEl = array[0], maxCount = 1;
    for(let i = 0; i < array.length; i++)
    {
        let el = array[i];
        if(modeMap[el] === null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

// When scanner detects a barcode
  _onDetected = (result) => {
    if (this.state.numberOfScans < 20) {
    let pushing = this.state.results.concat(result.codeResult.code)
    let incre = this.state.numberOfScans + 1
    this.setState({numberOfScans: incre})
    this.setState({results: pushing});
    console.log(this.state.results);
    console.log(this.state.numberOfScans)
  } else if (this.state.numberOfScans >= 20) {
    this.setState({bestResult: this.bestBarcode(this.state.results)})
    console.log(`bestresult: ${this.state.bestResult}`)
    console.log(`scans ${this.state.numberOfScans}`)
  }
}

  render() {

  // Product page redirection when bestBarcode() returns the most occuring barcode 
  const barCode = this.state.bestResult;
  if (barCode === null) {

    return (
      <div>
          <button onClick={this._scan} className="button"> 
          {this.state.scanning ? 'Stop' : 'Scan' }
          </button>
          {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
      </div>
    )
  } else {

    return <Redirect to={`/product/${barCode}`}/>
    
  } 
  }
}

export default Quagga;
