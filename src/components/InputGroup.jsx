import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import {Redirect} from "react-router-dom";
import Qapp from "../quagga/App"

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
    if (barCode) {return <Redirect to={`/product/${barCode}`}/>}

    return (
      
      <div style={homePageStyle} className="w-80 p-3" style={{backgroundColor:"rgb(247, 211, 6)"}}>
      
        <SearchInput onChange={inputValue => this.setState({ inputValue })} value={inputValue}/>
        <SearchButton barcode={inputValue} />
        <Qapp />
        </div>
    )
    }
  }

