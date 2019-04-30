import React, { Component } from "react";
import { Button, Row, Col, CardImg } from "reactstrap";
import {Link} from "react-router-dom"

import styles from "./History.module.css";
import SuperHero from "../images/herohomepage.png";


class History extends Component {
	render() {
		return (
			<div className={styles.bgBlock}>
				<Row className="mx-0">
					<Col xs= "12" lg="6">
						<CardImg src={SuperHero} alt="" />
					</Col>
					<Col xs="12" lg="6" className="m-auto d-flex flex-column">
						<p className={`${styles.textLaptop} d-none d-lg-block m-4`}>
							Devine quoi? Les aliments ont des supers pouvoirs... ils sont cachés dans les codes barres !
							<br/>Utilise le scanner pour les découvrir!
						</p>
						<Button
							tag={Link} to="/scan"
							className={`d-none d-lg-block mx-auto mt-5 ${styles.myButton}`}
						>
							Clique ici pour accéder au scanner !
						</Button>
						<div className={`${styles.textMobile} d-lg-none`}>
							<p>
								Appuie sur le bouton pour scanner le code barre et découvrir
								leurs pouvoirs cachés!
							</p>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default History;