import React, { Component } from "react";
import Switch from "react-switch";
import QuaggaError from "../quagga/QuaggaError";
import InputGroupError from "./InputGroupError";

export default class SwitchExample extends Component {
	constructor() {
		super();
		this.state = {
			checked: false
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState({ checked: !this.state.checked });
	}

	render() {
		return (
			<>
			<div style={{
				textAlign: "center"
			}}>
				{/* <label htmlFor="material-switch">
					<span
						style={{
							textAlign: "center",
							fontFamily: "Patrick Hand SC",
							fontSize: "1.5em"
						}}
					>
			
					</span>
				</label>
				<br /> */}
				{console.log(this.state.checked)}
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
				</div>
				<div>
				{this.state.checked ? <QuaggaError checked={this.state.checked}/> : <InputGroupError />}
				{console.log(this.state.checked)}
				</div>
				</>
		);
	}
}
