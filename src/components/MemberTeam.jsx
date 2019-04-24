import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const MemberTeam = props => {
	return (
		<div>
			<Card body outline color="warning">
				<img src={props.image} />
				<CardTitle>{props.name} </CardTitle>
			</Card>
			<Card body outline color="warning">
				<CardText> {props.presentation} </CardText>
			</Card>
		</div>
	);
};

export default MemberTeam;
