import React from "react";
import { Redirect } from "react-router-dom";
import { InputGroup, InputGroupAddon } from "reactstrap";

import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import styles from "./InputGroupError.module.css";

export default class SearchBar extends React.Component {
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
		{
			return (
				<div className={`${styles.container}`}>
					<InputGroup className={`${styles.inputBar}`}>
						<SearchInput
							onChange={inputValue => this.setState({ inputValue })}
							value={inputValue}
						/>
						<InputGroupAddon addonType="append">
							<SearchButton barcode={inputValue} />
						</InputGroupAddon>
					</InputGroup>
				</div>
			);
		}
	}
}
