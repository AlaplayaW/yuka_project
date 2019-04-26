import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

import styles from "./Contact.module.css";

export default class Contact extends React.Component {
	render() {
		return (
			<Form className={`p-3 ${styles.Form}`}>
				<h1>Contactez-nous</h1>
				<FormGroup>
					<Col sm={11}>
						<Label for="name"> Votre nom </Label>
						<Input
							type="name"
							name="name"
							id="name"
							placeholder="Votre nom ici"
						/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col sm={11}>
						<Label for="exampleEmail"> Email </Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="Votre email ici"
						/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col sm={11}>
						<Label for="text"> Objet </Label>
						<Input
							type="text"
							name="text"
							id="text"
							placeholder="Quel est l'objet de votre message"
						/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col sm={11}>
						<Label for="message"> Votre message </Label>
						<Input type="textarea" name="text" id="message" />
					</Col>
				</FormGroup>
				<Col sm={11}>
					<Button className="mb-5" > Envoyer </Button>
				</Col>
			</Form>
		);
	}
}
