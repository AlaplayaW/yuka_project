import React, { Component } from "react";
import { CardImg, Card } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import NoteB from "../images/noteB.png";

import styles from "./ProductNoteFiche.module.css";

export default function NoteApouvoirFiche() {
	return (
		<div>
			<Card className={styles.cardPowerNote}>
				<CardImg
					className={styles.imgNote}
					src={NoteB}
					alt="POUVOIR FORCE VERTE"
				/>
				<p className={styles.powerName}> POUVOIR FORCE VERTE </p>
			</Card>
		</div>
	);
}
