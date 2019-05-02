import React from "react";
import { CardImg, Card } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import NoteD from "../images/noteD.png";

import styles from "./ProductNoteFiche.module.css";

export default function NoteApouvoirFiche() {
	return (
		<div>
			<Card className={styles.cardPowerNote}>
				<CardImg
					className={styles.imgNote}
					src={NoteD}
					alt="POUVOIR FORCE ORANGE"
				/>
				<p className={styles.powerName}> POUVOIR FORCE ORANGE </p>
			</Card>
		</div>
	);
}
