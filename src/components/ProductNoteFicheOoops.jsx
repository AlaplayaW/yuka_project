import React, { Component } from "react";
import { CardImg, Card } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import Ooops from "../images/Ooops.png";

import styles from "./ProductNoteFiche.module.css";

export default function NoteApouvoirFicheOoops() {
	return (
		<div>
			<Card className={styles.cardPowerNote}>
				<CardImg className={styles.imgNote} src={Ooops} alt="OOOPS" />
				<p className={styles.powerName}>
					Ooops nous n'avons pas d'informations sur ce produit
				</p>
			</Card>
		</div>
	);
}
