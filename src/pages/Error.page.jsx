import React from "react";
import SearchInput from "../components/SearchInput";
import SearchButton from "../components/SearchButton";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import SwitchButton from "../components/SwitchButton";
import styles from "./Error.page.module.css";

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
				<div className={styles.block}
				>
					<div>
						<p className={styles.textLaptop}>
							OOOPS ! Le scan du produit n'a pas marché...
						</p>
						<p className={styles.textLaptop}>
							Tu peux rentrer son code à la main ou réessayer de scanner le code barre en appuyant sur ce bouton
						</p>
					</div>

							<div >
								<SwitchButton
									onChange={inputValue => this.setState({ inputValue })}
									value={inputValue}
									barcode={inputValue}
								/>
							</div>
						
					
					</div>
		
				
			</Layout>
		);
	}
}
