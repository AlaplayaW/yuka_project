import React from "react";
import ReactWebcam from '../barcode-scanner/react-webcam';
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { Link, Redirect} from "react-router-dom";
import App from "../quagga-cra/App"

const homePageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

export default class InputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      barCode: "",
    };
  }



  render() {
    const { inputValue, barCode } = this.state;
    if (barCode) {
      return <Redirect to={`/product/${barCode}`}/>}
    return (
      <div style={homePageStyle} className="w-80 p-3" style={{backgroundColor:"rgb(247, 211, 6)"}}>
      
        <SearchInput onChange={inputValue => this.setState({ inputValue })} value={inputValue}/>
        <SearchButton barcode={inputValue} />
        {/* <ReactWebcam onScan={barCode => {this.setState({ barCode }); */}
        <App />
        </div>
    )
    }
  }

