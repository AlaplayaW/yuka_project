import React from "react";
import { CardImg, Card } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import NoteA from "../images/noteA.png";

import styles from "./ProductNoteFiche.module.css";

export default function NoteApouvoirFiche() {
	return (
		<div>
			<Card className={styles.cardPowerNote}>
				<CardImg className={styles.imgNote} src={NoteA} alt="SUPER HÉRO" />
				<p className={styles.powerName}> SUPER HÉRO </p>
			</Card>
		</div>
	);
}
