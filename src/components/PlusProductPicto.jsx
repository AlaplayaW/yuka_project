import React from "react";
import { CardImg, Row, Col } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import bio from "../images/bio.png";
import bioOmbre from "../images/bio_ombre.png";
import MadeInFrance from "../images/MadeInFrance.png";
import MadeInFranceOmbre from "../images/MadeInFrance_ombre.png";
import SansHuilePalme from "../images/SansHuilePalme.png";
import SansHuilePalmeOmbre from "../images/SansHuilePalme_ombre.png";
import SansGluten from "../images/SansGluten.png";
import SansGlutenOmbre from "../images/SansGlutenOmbre.png";

export default class PlusProductPicto extends React.Component {
	constructor(props) {
		super(props);
	}
	// ------------------------ ALGO AVEC "LABELS"  ------------------------
	algoBio() {
		const AB = this.props.pictos;
		if (AB.toLowerCase().includes("bio")) {
			return bio;
		} else {
			return bioOmbre;
		}
	}

	algoMade() {
		const france = this.props.pictos;
		if (france.toLowerCase().includes("fabriqué en france")) {
			return MadeInFrance;
		} else {
			return MadeInFranceOmbre;
		}
	}

	algoPalme() {
		const palme = this.props.pictos;
		if (palme.toLowerCase().includes("sans huile de palme")) {
			return SansHuilePalme;
		} else {
			return SansHuilePalmeOmbre;
		}
	}
	algoGluten() {
		const gluten = this.props.pictos;
		if (gluten.toLowerCase().includes("sans gluten")) {
			return SansGluten;
		} else {
			return SansGlutenOmbre;
		}
	}
	// ------------------------ FIN ALGO AVEC "LABELS" ------------------------

	// ------------------- ALGO AVEC "LABELS_TAGS" -------------------
	// algoBio() {
	// 	const AB = this.props.labels;
	// 	if (AB.includes("fr:ab-agriculture-biologique")) {
	// 		return bio;
	// 	} else {
	// 		return bioOmbre;
	// 	}
	// }

	// algoMade() {
	// 	const france = this.props.labels;
	// 	if (
	// 		france.includes("en:made-in-france") ||
	// 		france.includes("fr:agriculture-france")
	// 	) {
	// 		return MadeInFrance;
	// 	} else {
	// 		return MadeInFranceOmbre;
	// 	}
	// }

	// algoPalme() {
	// 	const palme = this.props.labels;
	// 	if (palme.includes("en:palm-oil-free")) {
	// 		return SansHuilePalme;
	// 	} else {
	// 		return SansHuilePalmeOmbre;
	// 	}
	// }
	// algoGluten() {
	// 	const gluten = this.props.labels;
	// 	if (gluten.includes("en:gluten-free")) {
	// 		return SansGluten;
	// 	} else {
	// 		return SansGlutenOmbre;
	// 	}
	// }
	// ------------------- FIN ALGO AVEC "LABELS_TAGS" -------------------
	render() {
		return (
			<Row className="m-auto pt-5">
				<Col xs={{ size: 6 }} sm={{ size: 6 }} lg={{ size: 3 }}>
					<CardImg src={this.algoBio()} alt="produit bio" />
				</Col>
				<Col xs={{ size: 6 }} sm={{ size: 6 }} lg={{ size: 3 }}>
					<CardImg src={this.algoMade()} alt="Fabriqué en France" />
				</Col>
				<Col xs={{ size: 6 }} sm={{ size: 6 }} lg={{ size: 3 }}>
					<CardImg
						src={this.algoPalme()}
						alt="Ne contient pas d'huile de palme"
					/>
				</Col>
				<Col xs={{ size: 6 }} sm={{ size: 6 }} lg={{ size: 3 }}>
					<CardImg src={this.algoGluten()} alt="Sans gluten" />
				</Col>
			</Row>
		);
	}
}
