import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import styles from "./SuperPower.module.css";

const SuperPower = props => {
	return (
		<div className="col-3 mx-2 text-center">
			<Card
				className={`${styles.card} ${styles.HvrGrowShadow} mx-0 my-2`}
			>
				<CardTitle className={`${styles.cardTitle} pt-3`}>{props.power}</CardTitle>
				<CardImg
					src={props.image}
					alt="Power"
					className={`${styles.image} mx-auto`}
				/>
				<CardBody className={`p-1`}>
					<CardText>{props.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default SuperPower;
