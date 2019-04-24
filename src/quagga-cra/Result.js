import React, { Component } from 'react';
import Quagga from "quagga"

class Result extends Component {
  render() {
    const result = this.props.result
  /////////////////////////

//   let resultCollector = Quagga.ResultCollector.create({
//     capture: true, // keep track of the image producing this result
//     capacity: 20,  // maximum number of results to store
//     blacklist: [   // list containing codes which should not be recorded
//         {code: "3574660239843", format: "ean_13"}],
//     filter: function(codeResult) {
//         // only store results which match this constraint
//         // returns true/false
//         // e.g.: return codeResult.format === "ean_13";
//         return true;
//     }
// });

// Quagga.registerResultCollector(resultCollector)


////////////////////


    if (!result) { return null } 

    return (
      <li> {result.codeResult.code} [{result.codeResult.format}] </li>
      
    )
  }

  
}

export default Result
