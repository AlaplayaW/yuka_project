import React from "react";
import { Card, CardTitle, Col, CardImg } from "reactstrap";
import styles from "./Member.module.css";

const MemberTeam = props => {
	return (
		<>
			<Col lg={{ size: 3, offset: 1 }} md="6" sm="6">
				<Card className={styles.hovereffect} body outline color="warning">
					<CardImg src={props.image} alt="lalala" />
					<p>{props.presentation}</p>
					<CardTitle className={styles.CardTitle}>{props.name}</CardTitle>
				</Card>
			</Col>
		</>
	);
};

export default MemberTeam;
