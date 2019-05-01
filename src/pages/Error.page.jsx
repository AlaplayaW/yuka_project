import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import SwitchButton from "../components/SwitchButton";
import styles from "./Error.page.module.css";

export default class Error extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			case1: false,
			case2: false,
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
			<>
				<div className={styles.block}>
					<div>
						<p className={styles.textLaptop}>
							OOOPS ! Le scan du codebarre n'a pas marché...
						</p>
						<p className={styles.textLaptop}>
							Tu peux rentrer ses chiffres à la main en dessous ou réessayer de scanner le code barre en appuyant sur ce bouton
						</p>
					</div>
				
							<div >
								<SwitchButton
									value={inputValue}
									barcode={inputValue}
								/>
							</div>
					</div>
				</>
			</Layout>
		);
	}
}
