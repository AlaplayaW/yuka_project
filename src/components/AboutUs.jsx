import React from "react";
import { Card, Row, Col, CardTitle, CardImg } from "reactstrap";

import Jim from "../images/jim.png";
import JB from "../images/jb.png";
import Perrine from "../images/perrine.png";
import Cloe from "../images/cloe.png";

import styles from "./AboutUs.module.css";

export default function AboutUs() {
	return (
		<div
			className={`${styles.bgImg} container-fluid`}
			style={{ minHeight: "84vh" }}
		>
			<Row
				className={`${
					styles.titleMemberPage
				} d-flex justify-content-center pt-4`}
			>
				<p> LA TEAM YUKIDS </p>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col className="p-2" lg={{ size: 6 }}>
					<p className={styles.prezMember}>
						La team Yukids c'est le groupement de 4 supers kids (qui ne
						grandiront jamais) et qui s'intéressent de près aux pouvoirs des
						aliments. Ces 4 supers héros qui vous embarquent avec eux dans leur
						merveilleuse aventure : SAUVER LE MONDE !!
					</p>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col lg={{ size: 3, offset: 1 }} className="m-3">
					<Card className={styles.hovereffect} body outline color="warning">
						<CardImg src={Perrine} alt="lalala" />
						<p>
							La super héroïne du scan !! Elle accumule les supers pouvoirs
							grâce à ses scans de bons produits.
						</p>
						<CardTitle className={styles.CardTitle}> PERRINE </CardTitle>
					</Card>
				</Col>
				<Col lg={{ size: 3, offset: 1 }} className="m-3">
					<Card className={styles.hovereffect} body outline color="warning">
						<CardImg src={Jim} alt="lalala" />
						<p>
							Sauveur de tortues, Jim mène un combat quotidien pour rendre le
							monde meilleur !!
						</p>
						<CardTitle className={styles.CardTitle}> JIM </CardTitle>
					</Card>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col lg={{ size: 3, offset: 1 }} className="m-3">
					<Card className={styles.hovereffect} body outline color="warning">
						<CardImg src={JB} alt="lalala" />
						<p>
							Le héro de l'info, il cherche et déniche toutes les infos produits
							pour les mettre en ligne!! Rien ne lui échappe...
						</p>
						<CardTitle className={styles.CardTitle}>JEAN-BAPTISTE</CardTitle>
					</Card>
				</Col>
				<Col lg={{ size: 3, offset: 1 }} className="m-3">
					<Card className={styles.hovereffect} body outline color="warning">
						<CardImg src={Cloe} alt="lalala" />
						<p>
							La super héroïne du scan !! Elle accumule les supers pouvoirs
							grâce à ses scans de bons produits.
						</p>
						<CardTitle className={styles.CardTitle}> CLOÉ </CardTitle>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
