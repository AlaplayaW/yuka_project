import React, { Component } from "react";
import {
	Collapse,
	Button,
	CardImg,
	Row,
	Col
} from "reactstrap";

import styles from "./AccordionPower.module.css"

class AccordionPower extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<div className=" d-none d-md-block d-sm-block d-block d-lg-none p-4">
				<Row className="d-flex align-items-center">
					<Col sm="2">
						<CardImg
							src={this.props.image}
							alt="Power"
							style={{ height: 100, width: 100 }}
							className={`${styles.image} d-flex m-auto`}
						/>
					</Col>
					<Col sm="4">
						<h5 className="m-3"> {this.props.power} </h5>
					</Col>
					<Col sm="5">
						<Button
							color="primary"
							onClick={this.toggle}
							className="d-flex m-auto"
						>
							Plus d'infos
						</Button>
					</Col>
				</Row>
				<Row className="m-4">
					<Collapse isOpen={this.state.collapse} className="m-4">
						<div>{this.props.description}</div>
					</Collapse>
				</Row>
			</div>
		);
	}
}

export default AccordionPower;
