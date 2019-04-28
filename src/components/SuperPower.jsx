import React from "react";
import styles from "./SuperPower.module.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const SuperPower = props => {
	return (
		<div className="col-3 m-2 text-center">
			<Card
				className={`${styles.card} ${styles.HvrGrowShadow} mx-0 my-2`}
			>
				<CardTitle className={`${styles.cardTitle} pt-3`}>{props.power}</CardTitle>
				<CardImg
					src={props.image}
					alt="Power"
					className={`${styles.image} mx-auto`}
				/>
				<CardBody className={`${styles.cardText} p-1`}>
					<CardText>{props.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default SuperPower;
