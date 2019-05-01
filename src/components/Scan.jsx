import React from "react";
import { Redirect } from "react-router-dom";

import Layout from "../components/Layout";

import SwitchButton from "../components/SwitchButton";

export default class Scan extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			barCode: ""
		};
	}

	render() {
		const { inputValue, barCode } = this.state;
		if (barCode) {
			return <Redirect to={`/product/${barCode}`} />;
		}

		return (
			<div>
				<SwitchButton
					onChange={inputValue => this.setState({ inputValue })}
					value={inputValue}
					barcode={inputValue}
				/>
			</div>
		);
	}
}
