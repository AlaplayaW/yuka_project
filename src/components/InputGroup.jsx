import React from "react";
import {Redirect} from "react-router-dom";
import Quagga from "../quagga/Quagga"

import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import styles from "./InputGroup.module.css";


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
    if (barCode) {return <Redirect to={`/product/${barCode}`}/>} {

    return (
      <div className={`${styles.container}`}>

        <div className={`${styles.inputText}`}>
          <SearchInput onChange={inputValue => this.setState({ inputValue })} value={inputValue}/>
          <SearchButton barcode={inputValue} />
        </div>
    )
    }

  }
}
