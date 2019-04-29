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
					<Col lg="6" className={`${styles.imgSuper}`}>
						<CardImg src={SuperHero} alt="" />
					</Col>
					<Col lg="6" className="align-self-center">
						<p className={`${styles.text} d-none d-lg-block m-5`}>
							Devine quoi? Les aliments ont des supers pouvoirs... ils sont cachés dans les codes barres !
							<br/>Utilise le scanner pour les découvrir!
						</p>
						<Button
							tag={Link} to="/scan"
							color="info"
							className="d-none d-lg-block m-5"
						>
							Clique ici pour accéder au scanner !
						</Button>
						<div className={`${styles.text} d-lg-none`}>
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