import React, { Component } from "react";
import {
	Collapse,
	Button,
	CardImg,
	Row,
	Col,
	DropdownToggle,
	ButtonDropdown,
	Container,
} from "reactstrap";

import styles from "./AccordionPower.module.css";

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
			<Container className="d-lg-none d-flex justify-content-center border-bottom">
				<Row className="align-items-center mx-0">
					<Col xs="4">
						<CardImg
							src={this.props.image}
							alt="Power"
							className={`${styles.image}`}
						/>
					</Col>
					<Col xs="8" className="d-flex justify-content-center">
						<ButtonDropdown onClick={this.toggle}>
							<Button color="transparent" className={`${styles.button} px-0 py-2`}>
								{this.props.power}
							</Button>
							<DropdownToggle color="transparent" className="border px-3">
								+
							</DropdownToggle>
						</ButtonDropdown>
					</Col>
					<Collapse isOpen={this.state.collapse} className="m-2">
						<div>{this.props.description}</div>
					</Collapse>
				</Row>
			</Container>
		);
	}
}

export default AccordionPower;
