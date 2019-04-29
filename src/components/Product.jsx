import React from "react";
import {
	Card,
	Collapse,
	Jumbotron,
	Button,
	CardBody,
	Row,
	Col
} from "reactstrap";
import styles from "./Product.module.css";
import ProductNoteFicheA from "./ProductNoteFicheA";
import ProductNoteFicheB from "./ProductNoteFicheB";
import ProductNoteFicheC from "./ProductNoteFicheC";
import ProductNoteFicheD from "./ProductNoteFicheD";
import ProductNoteFicheE from "./ProductNoteFicheE";
import Ooops from "../images/Ooops.png";
import PlusProductPicto from "./PlusProductPicto";
// import PictoProduct from "./PictoProduct";

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

	// ---------------------------- ALGO POUR AFFICHER PICTO + NOM DU POUVOIR + DETAIL ----------------------------
	// A VOIR SI ON CONSERVE

	nutriScorePicture() {
		const nutriscore = this.props.nutriscore;
		if (nutriscore === "a") {
			return <ProductNoteFicheA />;
		}
		if (nutriscore === "b") {
			return <ProductNoteFicheB />;
		}
		if (nutriscore === "c") {
			return <ProductNoteFicheC />;
		}
		if (nutriscore === "d") {
			return <ProductNoteFicheD />;
		}
		if (nutriscore === "e") {
			return <ProductNoteFicheE />;
		} else {
			return Ooops;
		}
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<div className={`${styles.Bg} no-gutters p-2 p-sm-4`}>
				<Jumbotron className={`${styles.CardStyle} no-gutters`}>
					<Row className={`${styles.infoProduct} p-5 m-md-5`}>
						<Col
							xs={{ size: 12, order: 2 }}
							sm={{ size: 4, order: 1 }}
							className="d-flex justify-content-center"
						>
							<img src={this.props.imageUrl} alt="" />
						</Col>
						<Col
							xs={{ size: 12, order: 1 }}
							sm={{ size: 7, offset: 1, order: 2 }}
						>
							<h2
								className={`${styles.h2product} text-center text-sm-left pb-4`}
							>
								{this.props.name}
							</h2>
							<p className={`${styles.brandName} text-center text-sm-left`}>
								{this.props.brand}
							</p>
						</Col>
					</Row>
					<Row className="m-md-5 bg-white">
						<Col lg={{ size: 4, offset: 4 }}>{this.nutriScorePicture()}</Col>
					</Row>
					<Row className="m-md-5 bg-white">
						{/* EMPLACEMENT POUR LES P'TITS PLUS : MADE IN FRANCE / BIO / SANS HUILE DE PALME */}

						<PlusProductPicto />
					</Row>
					<Row>
						<Col className="m-2 m-md-5 p-1">
							<Button
								color="success"
								onClick={this.toggle}
								size="lg"
								style={{ marginBottom: "1rem" }}
								block
							>
								Plus d'informations sur ce produit (pour 100g)
							</Button>
							<Collapse isOpen={this.state.collapse} style={{ width: "100%" }}>
								<Card className="m-2 m-md-1 p-1">
									<CardBody className="py-0">
										<Row className="d-flex flex-column text-center">
											<Col className="p-3">
												Calories :{" "}
												{`${this.props.energyV}${this.props.energyU}`}
											</Col>
											<Col className="p-3 border-top ">
												{" "}
												Matières grasses :{" "}
												{`${this.props.fatV}${this.props.fatU}`}
											</Col>
											<Col className="p-3 border-top ">
												Graisses saturées :{" "}
												{`${this.props.saturedFatV}${this.props.saturedFatU}`}
											</Col>
											<Col className="p-3 border-top">
												Sucre :{" "}
												{`${this.props.sugars_value}${this.props.sugars_unit}`}
											</Col>
											<Col className="p-3 border-top ">
												Sel : {`${this.props.saltV}${this.props.saltU}`}
											</Col>
										</Row>
									</CardBody>
								</Card>
							</Collapse>
						</Col>
					</Row>
					<div />
				</Jumbotron>
			</div>
		);
	}
}

// import React from "react";
// import {
// 	Card,
// 	Collapse,
// 	Jumbotron,
// 	Button,
// 	CardBody,
// 	Row,
// 	Col
// } from "reactstrap";
// import styles from "./Product.module.css";
// import NoteA from "../images/noteA.png";
// import NoteB from "../images/noteB.png";
// import NoteC from "../images/noteC.png";
// import NoteD from "../images/noteD.png";
// import NoteE from "../images/noteE.png";
// import Ooops from "../images/Ooops.png";
// import ProductNoteFiche from "./ProductNoteFiche";
// import ProductNoteFiche2 from "./ProductNoteFiche2";
// // import PictoProduct from "./PictoProduct";

// export default class Product extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.toggle = this.toggle.bind(this);
// 		this.state = { collapse: false };
// 	}

// 	// ---------------------------- ALGO POUR AFFICHER LES BONS PICTOS >>> ALGO DE JIM ----------------------------
// 	// A VOIR SI ON CONSERVE

// 	// nutriScorePicture() {
// 	// 	const nutriscore = this.props.nutriscore;
// 	// 	if (nutriscore === "a") {
// 	// 		return NoteA;
// 	// 	} else if (nutriscore === "b") {
// 	// 		return NoteB;
// 	// 	} else if (nutriscore === "c") {
// 	// 		return NoteC;
// 	// 	} else if (nutriscore === "d") {
// 	// 		return NoteD;
// 	// 	} else if (nutriscore === "e") {
// 	// 		return NoteE;
// 	// 	} else {
// 	// 		return Ooops;
// 	// 	}
// 	// }

// 	// ---------------------------- ALGO POUR AFFICHER PICTO + NOM DU POUVOIR + DETAIL ----------------------------
// 	// A VOIR SI ON CONSERVE

// 	nutriScorePicture() {
// 		const nutriscore = this.props.nutriscore;
// 		if (nutriscore === "a") {
// 			return <ProductNoteFiche />;
// 		}
// 		if (nutriscore === "b") {
// 			return <ProductNoteFiche2 />;
// 		}
// 		if (nutriscore === "c") {
// 			return <ProductNoteFiche2 />;
// 		}
// 		if (nutriscore === "d") {
// 			return <ProductNoteFiche2 />;
// 		}
// 		if (nutriscore === "e") {
// 			return <ProductNoteFiche2 />;
// 		} else {
// 			return Ooops;
// 		}
// 	}

// 	toggle() {
// 		this.setState(state => ({ collapse: !state.collapse }));
// 	}

// 	render() {
// 		return (
// 			<div className={`${styles.Bg} no-gutters p-2 p-sm-4`}>
// 				<Jumbotron className={`${styles.CardStyle} no-gutters`}>
// 					<Row className={`${styles.infoProduct} p-5 m-md-5`}>
// 						<Col
// 							xs={{ size: 12, order: 2 }}
// 							sm={{ size: 4, order: 1 }}
// 							className="d-flex justify-content-center"
// 						>
// 							<img src={this.props.imageUrl} alt="" />
// 						</Col>
// 						<Col
// 							xs={{ size: 12, order: 1 }}
// 							sm={{ size: 7, offset: 1, order: 2 }}
// 							className="d-flex align-items-center"
// 						>
// 							<h2
// 								className={`${styles.h2product} text-center text-sm-left pb-4`}
// 							>
// 								{this.props.name}
// 							</h2>
// 							<h3 className={`${styles.brandName} text-center text-sm-left`}>
// 								{this.props.brand}
// 							</h3>
// 						</Col>
// 						{/* <Col
// 							xs={{ size: 12, order: 2 }}
// 							sm={{ size: 4, order: 1 }}
// 							className="d-flex justify-content-center"
// 						>
// 							<img src={this.props.imageUrl} alt="" />
// 						</Col>
// 						<Col
// 							xs={{ size: 12, order: 1 }}
// 							sm={{ size: 7, offset: 1, order: 2 }}
// 						>
// 							<h2
// 								className={`${styles.h2product} text-center text-sm-left pb-4`}
// 							>
// 								{this.props.name}
// 							</h2>
// 							<h3 className={`${styles.brandName} text-center text-sm-left`}>
// 								{this.props.brand}
// 							</h3>
// 						</Col> */}
// 					</Row>
// 					<Row className="p-5 m-md-5 bg-white">
// 						<Col lg={{ size: 4, offset: 4 }}>{this.nutriScorePicture()}</Col>
// 						{/* SI ON UTILISE QUE LES IMAGES >>> A SUPPR ? */}
// 						{/* <img
// 							block
// 							className="mx-auto my-5 "
// 							src={this.nutriScorePicture()}
// 							alt=""
// 							style={{ borderRadius: "100%" }}
// 						/> */}
// 						{/* <ProductNoteFiche /> */}
// 						{/* <ProductNoteFiche2 /> */}
// 					</Row>
// 					<Row className="p-5 m-md-5 bg-white">
// 						{/* EMPLACEMENT POUR LES P'TITS PLUS : MADE IN FRANCE / BIO / SANS HUILE DE PALME */}
// 						<Col>
// 							<h3> Les p'tits plus : </h3>
// 						</Col>
// 					</Row>
// 					<Row>
// 						<Col className="m-2 m-md-5 p-1">
// 							<Button
// 								color="success"
// 								onClick={this.toggle}
// 								size="lg"
// 								style={{ marginBottom: "1rem" }}
// 								block
// 								// className="m-2 m-md-5 p-1"
// 							>
// 								Plus d'informations sur ce produit (pour 100g)
// 							</Button>
// 							<Collapse isOpen={this.state.collapse} style={{ width: "100%" }}>
// 								<Card className="m-2 m-md-1 p-1">
// 									<CardBody className="py-0">
// 										<Row className="d-flex flex-column text-center">
// 											<Col className="p-3">
// 												Calories :{" "}
// 												{`${this.props.energyV}${this.props.energyU}`}
// 											</Col>
// 											<Col className="p-3 border-top ">
// 												{" "}
// 												Matières grasses :{" "}
// 												{`${this.props.fatV}${this.props.fatU}`}
// 											</Col>
// 											<Col className="p-3 border-top ">
// 												Graisses saturées :{" "}
// 												{`${this.props.saturedFatV}${this.props.saturedFatU}`}
// 											</Col>
// 											<Col className="p-3 border-top">
// 												Sucre :{" "}
// 												{`${this.props.sugars_value}${this.props.sugars_unit}`}
// 											</Col>
// 											<Col className="p-3 border-top ">
// 												Sel : {`${this.props.saltV}${this.props.saltU}`}
// 											</Col>
// 										</Row>
// 									</CardBody>
// 								</Card>
// 							</Collapse>
// 						</Col>
// 					</Row>
// 					<div />
// 				</Jumbotron>
// 			</div>
// 		);
// 	}
// }
