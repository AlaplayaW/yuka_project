import React from "react";
import styles from "./SuperPower.module.css";
import {Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const SuperPower = props => {
	return (
		// <Row className="no-gutters">
		<div className="col-3 mx-2 text-center">
		{/* //////////probleme de marges*/}
			<Card
				className={`${styles.card} bg-transparent mx-3 d-none d-lg-flex`}
			>
				<CardImg src={props.image} alt="Power" className={`${styles.image} mx-auto`} />
				<CardBody className="p-1">
					<CardTitle className={`${styles.cardTitle} p-1`}>{props.power}</CardTitle>
					<CardText>{props.description}</CardText>
				</CardBody>
			</Card>
		</div>
		// </Row>

	);
};

export default SuperPower;
