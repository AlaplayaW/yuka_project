import React, { Component } from "react";
import { CardImg, Card } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import NoteC from "../images/noteC.png";

import styles from "./ProductNoteFiche.module.css";

export default function NoteApouvoirFiche() {
	return (
		<div>
			<Card className={styles.cardPowerNote}>
				<CardImg
					className={styles.imgNote}
					src={NoteC}
					alt="Super méga pouvoir"
				/>
				<p className={styles.powerName}> Super méga pouvoir </p>
			</Card>
		</div>
	);
}
