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
import NoteA from "../images/noteA.png";
import NoteB from "../images/noteB.png";
import NoteC from "../images/noteC.png";
import NoteD from "../images/noteD.png";
import NoteE from "../images/noteE.png";
import Ooops from "../images/Ooops.png";
import NoteApouvoirFiche from "./NoteApouvoirFiche";
// import PictoProduct from "./PictoProduct";

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

	nutriScorePicture() {
		const nutriscore = this.props.nutriscore;
		if (nutriscore === "a") {
			return NoteA;
		} else if (nutriscore === "b") {
			return NoteB;
		} else if (nutriscore === "c") {
			return NoteC;
		} else if (nutriscore === "d") {
			return NoteD;
		} else if (nutriscore === "e") {
			return NoteE;
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
					<Row className="m-1 m-md-5">
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
							<h2 className="text-center text-sm-left">{this.props.name}</h2>
							<h3 className="text-center text-sm-left">{this.props.brand}</h3>
						</Col>
					</Row>
					{/* <Row>
						{" "}
						<img src={this.nutriScorePicture()} />{" "}
					</Row> */}
					<Row>
						<img
							block
							className="mx-auto my-5 "
							src={this.nutriScorePicture()}
							alt=""
							style={{ borderRadius: "100%" }}
						/>
						<NoteApouvoirFiche />
					</Row>
					<Row>
						<Button
							color="success"
							onClick={this.toggle}
							size="lg"
							style={{ marginBottom: "1rem" }}
							block
							className="m-2 m-md-5 p-1"
						>
							Plus d'informations sur ce produit (pour 100g)
						</Button>
						<Collapse isOpen={this.state.collapse} style={{ width: "100%" }}>
							<Card>
								<CardBody className="py-0">
									<Row className="d-flex flex-column text-center">
										<Col className="p-3">
											Calories : {`${this.props.energyV}${this.props.energyU}`}
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
					</Row>
					<div />
				</Jumbotron>
			</div>
		);
	}
}
