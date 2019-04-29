import React, { Component } from "react";
import { CardImg } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import NoteA from "../images/noteA.png";

export default function NoteApouvoirFiche() {
	return (
		<div class="accordion" id="accordionExample">
			<div class="card">
				<div class="card-header" id="headingOne">
					<h2 class="mb-0">
						<button
							class="btn btn-link"
							type="button"
							data-toggle="collapse"
							data-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Collapsible Group Item #1
						</button>
					</h2>
				</div>

				<div
					id="collapseOne"
					class="collapse show"
					aria-labelledby="headingOne"
					data-parent="#accordionExample"
				>
					<div class="card-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
						terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
						skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
						Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
						single-origin coffee nulla assumenda shoreditch et. Nihil anim
						keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
						sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
						occaecat craft beer farm-to-table, raw denim aesthetic synth
						nesciunt you probably haven't heard of them accusamus labore
						sustainable VHS.
					</div>
				</div>
			</div>
		</div>
		// <div className="accordion">
		// 	<div className="card">
		// 		<CardImg src={NoteA} alt="Super méga pouvoir" />
		// 		<div className="card-header" id="headingOne">
		// 			<h2 className="mb-0">
		// 				<button
		// 					className="btn btn-link"
		// 					type="button"
		// 					data-toggle="collapse"
		// 					data-target="#collapseOne"
		// 					aria-expanded="true"
		// 					aria-controls="collapseOne"
		// 				>
		// 					Super méga pouvoir
		// 				</button>
		// 			</h2>
		// 		</div>
		// 		<div
		// 			id="collapseOne"
		// 			className="collapse show"
		// 			aria-labelledby="headingOne"
		// 			data-parent="#accordionExample"
		// 		>
		// 			<div className="card-body">
		// 				Excellent ce produit est plein de supers pouvoirs, continue comme ça
		// 				!!!
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

// class NoteApouvoirFiche extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.toggle = this.toggle.bind(this);
// 		this.state = { collapse: false };
// 	}

// 	toggle() {
// 		this.setState(state => ({ collapse: !state.collapse }));
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<CardImg src={NoteA} alt="Super méga pouvoir" />
// 				<p>

// 				</p>
// 				<Button
// 					color="primary"
// 					onClick={this.toggle}
// 					style={{ marginBottom: "1rem" }}
// 				>
// 					Toggle
// 				</Button>
// 				<Collapse isOpen={this.state.collapse}>
// 					<Card>
// 						<CardBody>
//               Excellent ce produit est plein de supers pouvoirs, continue comme ça !!!
// 						</CardBody>
// 					</Card>
// 				</Collapse>
// 			</div>
// 		);
// 	}
// }

// export default Example;
