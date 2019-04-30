import React, { Component } from "react";
import { CardImg, Card, Row, Col } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import bio from "../images/bio.png";
import bioOmbre from "../images/bio_ombre.png";
import MadeInFrance from "../images/MadeInFrance.png";
import MadeInFranceOmbre from "../images/MadeInFrance_ombre.png";
import SansHuilePalme from "../images/SansHuilePalme.png";
import SansHuilePalmeOmbre from "../images/SansHuilePalme_ombre.png";

// ------------------------ VERSION DÉMO SANS ALGO ------------------------
// export default function PlusProductPicto() {
// 	return (
// 		<Row className="m-auto pt-5">
// 			<Col>
// 				<CardImg src={algoBio()} alt="produit bio" />
// 			</Col>
// 			<Col>
// 				<CardImg src={algoFrance()} alt="Fabriqué en France" />
// 			</Col>
// 			<Col>
// 				<CardImg
// 					src={SansHuilePalmeOmbre}
// 					alt="Ne contient pas d'huile de palme"
// 				/>
// 			</Col>
// 		</Row>
// 	);
// }

// ------------------------ TEST AVEC ALGO POUR GÉRER LES PICTOS ------------------------

export default class PlusProductPicto extends React.Component {
	constructor(props) {
		super(props);
	}
	algoBio() {
		const AB = this.props.labels;
		if (AB.includes("fr:ab-agriculture-biologique")) {
			return bio;
		} else {
			return bioOmbre;
		}
	}

	algoMade() {
		const france = this.props.labels;
		if (france.includes("en:made-in-france")) {
			return MadeInFrance;
		} else {
			return MadeInFranceOmbre;
		}
	}

	algoPalme() {
		const palme = this.props.labels;
		if (palme.includes("en:palm-oil-free")) {
			return SansHuilePalme;
		} else {
			return SansHuilePalmeOmbre;
		}
	}
	render() {
		return (
			<Row className="m-auto pt-5">
				<Col>
					<CardImg src={this.algoBio()} alt="produit bio" />
				</Col>
				<Col>
					<CardImg src={this.algoFrance()} alt="Fabriqué en France" />
				</Col>
				<Col>
					<CardImg
						src={this.algoPalme()}
						alt="Ne contient pas d'huile de palme"
					/>
				</Col>
			</Row>
		);
	}
}
