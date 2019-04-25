import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const SuperPower = props => {
	return (
		<>
			<Card
				className="bg-transparent mx-1 d-none d-lg-block"
			>
				<CardImg src={props.image} alt="Power" />
				<CardBody>
					<CardTitle className="p-1 text-center">{props.power}</CardTitle>
					<CardText>{props.description}</CardText>
				</CardBody>
			</Card>
		</>
	);
};

export default SuperPower;
