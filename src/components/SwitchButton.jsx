import React, { Component } from "react";
import Switch from "react-switch";
import Quagga, {  } from "../quagga/Quagga";
import InputGroup from "./InputGroup";

export default class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { 
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <>
<label htmlFor="material-switch">
  <span style={{
						textAlign: "center",
						fontFamily: "Patrick Hand SC",
						fontSize: "1.5em"
					}}>
SWITCH POUR UTILISER LA CAM
  </span>
</label>
  <br/>
  <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    onColor="#86d3ff"
    onHandleColor="#2693e6"
    handleDiameter={30}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={20}
    width={48}
    className="react-switch"
    id="material-switch"
  />
  {
    this.state.checked ? <Quagga/> : <InputGroup />
  }
  </>
    );
  }
}