import React from "react";

import SearchInput from "../components/SearchInput";
import SearchButton from "../components/SearchButton";
import {Redirect} from "react-router-dom";

import Quagga from "../quagga/Quagga";
import Layout from "../components/Layout";



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
				backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/09/18/56/shopping-2615482_1280.jpg')",
				backgroundSize: 'cover',
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
					<SearchInput
						onChange={inputValue => this.setState({ inputValue })}
						value={inputValue}
					/>
					<SearchButton barcode={inputValue} />
					<Quagga />
				</div>
			</Layout>
		);
	}
}
