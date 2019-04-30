import React, { Component } from "react";
import { CardImg, Card, Row, Col } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import bio from "../images/bio.png";
import bioOmbre from "../images/bio_ombre.png";
import MadeInFrance from "../images/MadeInFrance.png";
import MadeInFranceOmbre from "../images/MadeInFrance_ombre.png";
import SansHuilePalme from "../images/SansHuilePalme.png";
import SansHuilePalmeOmbre from "../images/SansHuilePalme_ombre.png";

export default function PlusProductPicto() {
	return (
		<Row className="m-auto pt-5">
			<Col>
				<CardImg src={bio} alt="produit bio" />
			</Col>
			<Col>
				<CardImg src={MadeInFrance} alt="Fabriqué en France" />
			</Col>
			<Col>
				<CardImg
					src={SansHuilePalmeOmbre}
					alt="Ne contient pas d'huile de palme"
				/>
			</Col>
		</Row>
	);
}
