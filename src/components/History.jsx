import React, { Component } from "react";
import { Button, Row, Col, CardImg } from "reactstrap";

import styles from "./History.module.css";
import SuperHero from "../images/herohomepage.png";

// -------------- COMPONENT WITH REACTSTRAP AND BOOTSTRAP  --------------
class History extends Component {
	render() {
		return (
			<div className={styles.bgBlock}>
				<Row>
					<Col
						lg="6"
						className={`${styles.imgSuper} 	d-flex justify-content-center`}
					>
						<CardImg src={SuperHero} alt="" />
					</Col>
					<Col lg="6" className="align-self-center">
						<p className={`${styles.text} d-none d-lg-block m-5`}>
							Welcome petit !! <br />
							Devine quoi? Il paraît que les aliments ont des supers pouvoirs!
							Pour les découvrir, suis les instructions ;)
						</p>
						<Button
							href="./scan"
							className={`${styles.notice} d-none d-lg-block m-5`}
						>
							Scan vite le code barre pour les découvrir !
						</Button>
						<div className={`${styles.noticeMobile} d-lg-none`}>
							<p>Appuie sur le code barre pour scanner les produits !</p>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default History;

//  -------------- COMPONENT WITH CSS GRID --------------
// class History extends Component {
// 	render() {
// 		return (
// 			<div className={styles.main}>
// 				<p className={`${styles.title} d-none d-lg-block`}>
// 					Hey, tu sais quoi? <br /> Il parait que les aliments ont des supers
// 					pouvoirs! Tu veux les voir?
// 				</p>
// 				<Button href="./scan" className={`${styles.notice} d-none d-lg-block`}>
// 					Scan vite le code barre pour les découvrir !
// 				</Button>
// 				<div className={styles.superHero}>
// 					<img src={SuperHeroRed_phone} alt="" />
// 				</div>
// 				<div className={`${styles.noticeMobile} d-lg-none`}>
// 					<p>Appuie sur le code barre pour scanner les produits !</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default History;
