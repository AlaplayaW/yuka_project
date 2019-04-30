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
			<Row className="d-flex justify-content-center">
				<p className={styles.titleMemberPage}> LA TEAM YUKIDS </p>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col lg={{ size: 6 }}>
					<p>
						La team Yukids c'est le groupement de 4 supers kids (qui ne
						grandiront jamais) et qui s'intéressent de près aux pouvoirs des
						aliments. Chercher, lire, scanner, coder sont les passions de ces 4
						supers qui vous embarquent avec eux dans leur merveilleuse aventure
						: sauver le monde !!
					</p>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col lg={{ size: 3, offset: 1 }} className="m-3">
					<Card className={styles.hovereffect} body outline color="warning">
						<CardImg src={Perrine} alt="lalala" />
						<p>
							La super héroïne du scan !! Elle accumule les supers pouvoirs
							grâce à ses scans
						</p>
						<CardTitle className={styles.CardTitle}> PERRINE </CardTitle>
					</Card>
				</Col>
				<Col lg={{ size: 3, offset: 1 }} className="m-3">
					<Card className={styles.hovereffect} body outline color="warning">
						<CardImg src={Jim} alt="lalala" />
						<p>
							Sauveur de tortues, Jim mène un combat quotidien pour rendre le
							monde meilleur !! A bat les produits
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
							{" "}
							Le héro de l'info, il cherche et déniche toutes les infos produits
							pour les mettre en ligne!! Rien ne lui échappe{" "}
						</p>
						<CardTitle className={styles.CardTitle}>JEAN-BAPTISTE</CardTitle>
					</Card>
				</Col>
				<Col lg={{ size: 3, offset: 1 }} className="m-3">
					<Card className={styles.hovereffect} body outline color="warning">
						<CardImg src={Cloe} alt="lalala" />
						<p> lalala </p>
						<CardTitle className={styles.CardTitle}> CLOÉ </CardTitle>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
