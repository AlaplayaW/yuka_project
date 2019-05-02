import React from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

import styles from "./FaqCollapse.module.css";


export default class FaqCollapse extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<div style={{ textAlign: "center" }} className={styles.container}>
				<Button
					className="p-1 m-1 p-md-2 m-md-2"
					onClick={this.toggle}
					style={{
						width: "80%",
						fontFamily: "Patrick Hand SC",
						fontSize: "1.6rem",
						backgroundColor: "#922D61",
						color: "#FFF"
					}}
				>
					{this.props.title}
				</Button>
				<Collapse className={styles.center} isOpen={this.state.collapse}>
					<Card
						className="p-1 m-1"
						style={{
							border: "white",
							fontFamily: "Patrick Hand SC",
							fontSize: "1.4em",
							width: "80%",
						}}
					>
						<CardBody className="p-1 m-1">{this.props.description}</CardBody>
					</Card>
				</Collapse>
			</div>
		);
	}
}
