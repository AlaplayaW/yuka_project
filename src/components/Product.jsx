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
import ProductNoteFicheOoops from "./ProductNoteFicheOoops";
import PlusProductPicto from "./PlusProductPicto";

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

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
			return <ProductNoteFicheOoops />;
		}
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<div className={`${styles.Bg} no-gutters p-2 p-sm-4`}>
				<Jumbotron className={`${styles.CardStyle} no-gutters`}>
					<Row className={`${styles.infoProduct} py-3 m-1 m-md-5`}>
						<Col
							xs={{ size: 12, order: 2 }}
							sm={{ size: 4, order: 1 }}
							className="d-flex justify-content-center"
						>
							<img className="img-thumbnail" src={this.props.imageUrl} alt="" />
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
						<Col lg={{ size: 12 }}>
							{/* <PlusProductPicto labels={this.props.labels} /> */}
							<PlusProductPicto pictos={this.props.pictos} />
						</Col>
					</Row>
					<Row>
						<Col className="m-2 m-md-5 p-1">
							<Button
								className={styles.buttonInfos}
								color="warning"
								onClick={this.toggle}
								size="lg"
								style={{ marginBottom: "1rem" }}
								block
							>
								Plus d'informations sur ce produit (pour 100g)
							</Button>
							<Collapse isOpen={this.state.collapse} style={{ width: "100%" }}>
								<Card className={`${styles.collapseStyle} m-2 m-md-1 p-1`}>
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
