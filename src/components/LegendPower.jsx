import React, { Component } from "react";
import { CardDeck, Button, Collapse } from "reactstrap";

import SuperPower from "./SuperPower";
import AccordionPower from "./AccordionPower";
import NoteA from "../images/noteA.png";
import NoteB from "../images/noteB.png";
import NoteC from "../images/noteC.png";
import NoteD from "../images/noteD.png";
import NoteE from "../images/noteE.png";
import Unknow from "../images/unknow.png";
import styles from "./LegendPower.module.css";

class LegendPower extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			collapse: false,
			power: [
				{
					power: "SUPER HÉRO",
					noteNutriscore: "A",
					image: NoteA,
					description:
						"Excellent travail, ce produit est plein de supers pouvoirs, continue comme ça !!!"
				},
				{
					power: "FORCE VERTE",
					noteNutriscore: "B",
					image: NoteB,
					description:
						"Bravo, belle trouvaille !! C'est un bon produit, continue sur cette lancée !  "
				},
				{
					power: "FORCE JAUNE",
					noteNutriscore: "C",
					image: NoteC,
					description:
						"Bof bof !! Ce produit n'est pas tip top, tu peux trouver mieux n'hésite pas à chercher encore ;)"
				},
				{
					power: "FORCE ORANGE",
					noteNutriscore: "D",
					image: NoteD,
					description:
						"Hum... force orange n'est pas un très bon pouvoir... Cherche encore il existe des produits similaires avec de meilleurs pouvoirs."
				},
				{
					power: "FORCE MALÉFIQUE",
					noteNutriscore: "E",
					image: NoteE,
					description:
						"Attention, ce produit a des pouvoirs maléfiques !!  Vérifie auprès de tes parents avant de le prendre !!!"
				},
				{
					power: "MYSTÈRE !",
					noteNutriscore: "undefined",
					image: Unknow,
					description:
						"Pouvoir mystère, à toi de le découvrir ! Demande à tes parents, ils pourront peut-être t'aider..."
				}
			]
		};
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<div className={`${styles.container} pb-3`}>
				<h2
					className={`${
						styles.h2Laptop
					} p-1 mb-1 text-center d-none d-lg-block`}
				>
					LES POUVOIRS SECRETS
				</h2>
				<CardDeck className="d-none d-lg-flex justify-content-around m-0">
					{this.state.power.map((powerList, index) => {
						return <SuperPower {...powerList} key={index} />;
					})}
				</CardDeck>
				<div className="mb-2">
					<h2
						className={`${styles.h2Mobile} p-2 text-center d-block d-lg-none`}
					>
						LES POUVOIRS SECRETS
					</h2>
					{this.state.power.map((powerAccordion, index) => {
						return <AccordionPower {...powerAccordion} key={index} />;
					})}
				</div>
			</div>
		);
	}
}

export default LegendPower;
