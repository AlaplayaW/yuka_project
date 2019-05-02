import React from "react";
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
					alt="POUVOIR FORCE JAUNE"
				/>
				<p className={styles.powerName}> POUVOIR FORCE JAUNE </p>
			</Card>
		</div>
	);
}
