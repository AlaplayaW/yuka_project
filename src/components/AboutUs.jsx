import React, { Component } from "react";
import { Card, Row, Col } from "reactstrap";
import MemberTeam from "./MemberTeam";
import Jim from "../images/jim.png";
import JB from "../images/jb.png";
import Perrine from "../images/perrine.png";
import Cloe from "../images/cloe.png";

class AboutUs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			members: [
				{
					name: "Jim",
					presentation:
						"Sauveur de tortues, Jim mène un combat quotidien pour rendre le monde meilleur !! A bat les produits",
					image: Jim
				},
				{
					name: "Jean-Baptiste",
					presentation:
						"Le héro de l'info, il cherche et déniche toutes les infos produits pour les mettre en ligne!! Rien ne lui échappe",
					image: JB
				},
				{
					name: "Perrine",
					presentation:
						"La super héroïne du scan !! Elle accumule les supers pouvoirs grâce à ses scans ",
					image: Perrine
				},
				{
					name: "Cloé",
					presentation: " lalalala",
					image: Cloe
				}
			]
		};
	}
	render() {
		return (
			<div>
				<Col lg="3">
					{this.state.members.map((team, index) => {
						return <MemberTeam {...team} key={index} />;
					})}
				</Col>
			</div>
		);
	}
}

export default AboutUs;
