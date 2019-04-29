import React from "react";

import SearchInput from "../components/SearchInput";
import SearchButton from "../components/SearchButton";
import {Redirect} from "react-router-dom";

import Qapp from "../quagga/App"


export default class Error extends React.Component {
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
    <div style={{textAlign: 'center'}}>
      <p style={{textAlign: 'center', fontFamily: 'Patrick Hand SC', fontSize: '2em'}}>OOOPS ! Ce produit n'a pas été trouvé</p>
      <p style={{textAlign: 'center', fontFamily: 'Patrick Hand SC', fontSize: '2em'}}>Retente ta chance juste en dessous !</p>
    <SearchInput onChange={inputValue => this.setState({ inputValue })} value={inputValue}/>
    <SearchButton barcode={inputValue} />
    <Qapp />

    </div>
  )
  }
}