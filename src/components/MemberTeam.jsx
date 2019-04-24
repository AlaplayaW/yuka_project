import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import styles from "./Member.module.css";

const MemberTeam = props => {
	return (
		<div>
			<Card body outline color="warning">
				<div className={styles.Card}>
					<img src="https://i.postimg.cc/cJHrKgcD/cloe.png" alt="lalala" />
					<h3> Prénom </h3>
				</div>
				<div classname={styles.CardText}>
					<p>
						Ici le texte de présentation qui ne doit apparaître qu'au hover de
						la putain de card
					</p>
				</div>
			</Card>
		</div>
		// 	<div>
		// 	<Card classname={styles.cardmember} body outline color="warning">
		// 	 		<img src={props.image} />
		// 			<CardTitle>{props.name} </CardTitle>
		// 		</Card>
		// 	 	<Card body outline color="warning">
		// 			<CardText> {props.presentation} </CardText>
		// 		</Card>
		//  </div>
	);
};

export default MemberTeam;
