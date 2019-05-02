import React from "react";
import { CardImg, Card } from "reactstrap";

import unknow from "../images/unknow.png";
import styles from "./ProductNoteFiche.module.css";

export default function NoteApouvoirFicheOoops() {
	return (
		<div>
			<Card className={styles.cardPowerNote}>
				<CardImg className={styles.imgNote} src={unknow} alt="Mystère" />
				<p className={styles.powerName}>
					Pouvoir mystère, demande à tes parents !
				</p>
			</Card>
		</div>
	);
}
