import React from "react";

import SearchInput from "../components/SearchInput";
import SearchButton from "../components/SearchButton";

import {Redirect} from "react-router-dom";

import Layout from "../components/Layout";

import SwitchButton from "../components/SwitchButton";

export default class Error extends React.Component {
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
		<Layout>	
		<div style={{ 
			textAlign: "center", 
			textShadow: "3px 3px 3px black",
			color: '#FF6319',
			fontSize: '1.5em',
			height: '80vh',
			backgroundColor: '#FEDE4F',
			}}>
				<p
					style={{
						textAlign: "center",
						fontFamily: "Patrick Hand SC",
						fontSize: "2em"
					}}
				>
					OOOPS ! Ce produit n'a pas été trouvé
				</p>
				<p
					style={{
						textAlign: "center",
						fontFamily: "Patrick Hand SC",
						fontSize: "2em"
					}}
				>
					Retente ta chance juste en dessous !
				</p>
				<SwitchButton	
				onChange={inputValue => this.setState({ inputValue })}
				value={inputValue}
				barcode={inputValue}
				/>
			</div>
		</Layout>
	);
}
}
