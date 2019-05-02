import React from "react";
import { CardImg, Card } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import NoteE from "../images/noteE.png";

import styles from "./ProductNoteFiche.module.css";

export default function NoteApouvoirFiche() {
	return (
		<div>
			<Card className={styles.cardPowerNote}>
				<CardImg
					className={styles.imgNote}
					src={NoteE}
					alt="POUVOIR MALÉFIQUE"
				/>
				<p className={styles.powerName}> POUVOIR MALÉFIQUE </p>
			</Card>
		</div>
	);
}
