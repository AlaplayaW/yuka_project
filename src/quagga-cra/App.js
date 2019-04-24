import React, { Component } from 'react';
import Scanner from './Scanner';
import Result from './Result';
import Quagga from "quagga"


class App extends Component {

  state = {
    scanning: false,
    results: []
  }

  _scan = () => {
    this.setState({scanning: !this.state.scanning});
  }

  _onDetected = (result) => {
    // this.setState({results: this.state.results.concat([result])});
    const results = result;    
    this.setState({results: results.codeResult.code});
    console.log(this.state.results);
    
  }


  render() {

    return (
      <div>
          <button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
          {/* <h1>{this.state.results}</h1> */}
          {/* {console.log(this.state.results.map((result, i) => (<Result key={result.codeResult.code + i} result={result} />)))} */}
          {/* <ul className="results">
            {this.state.results.map((result, i) => (<Result key={result.codeResult.code + i} result={result} />))}
          </ul> */}
          {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
      </div>
    )
  }

}

export default App;
