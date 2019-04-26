import React from "react";
import styles from "./SuperPower.module.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const SuperPower = props => {
	return (
		<div className="col-3 mx-2">
			<Card
				className="bg-transparent m-3 d-none d-lg-flex "
			>
				<CardImg src={props.image} alt="Power" className={`${styles.image} mx-auto`} />
				<CardBody className="p-1">
					<CardTitle className="p-1 text-center">{props.power}</CardTitle>
					<CardText>{props.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default SuperPower;
