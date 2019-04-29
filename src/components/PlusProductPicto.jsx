import React, { Component } from "react";
import { CardImg, Card } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import bio from "../images/bio.png";
import bioOmbre from "../images/bio_ombre.png";

import styles from "./ProductNoteFiche.module.css";

export default function PlusProductPicto() {
	return (
		<div className="d-flex justify-content-center">
			<h3> Les p'tits plus : </h3>
			<Card className={`${styles.cardPowerNote} d-flex flex-row`}>
				<CardImg src={bio} alt="produit bio" />
				<CardImg src={bioOmbre} alt="produit non indiqué comme étants bio" />
				<CardImg src={bioOmbre} alt="produit non indiqué comme étants bio" />
			</Card>
		</div>
	);
}
