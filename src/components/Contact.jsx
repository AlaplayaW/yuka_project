import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

import styles from "./Contact.module.css";

export default class Contact extends React.Component {
	render() {
		return (
			<div>
			<Form className={`${styles.Form} d-flex flex-column justify-content-center`}>
				<Col xs={{ size:10, offset:1}} lg={{ size: 6, offset: 3 }} className={`${styles.h1}`}>Contactez-nous</Col>
				<FormGroup className="mb-1">
					<Col xs={{ size:10, offset:1}} lg={{ size: 6, offset: 3 }}>
						<Label for="name" className="mb-1"> Nom </Label>
						<Input
							type="name"
							name="name"
							id="name"
							placeholder="Votre nom ici"
						/>
					</Col>
				</FormGroup>
				<FormGroup className="mb-1">
					<Col xs={{ size:10, offset:1}} lg={{ size: 6, offset: 3 }}>
						<Label for="exampleEmail" className="mb-1"> Email </Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="Votre email ici"
						/>
					</Col>
				</FormGroup>
				<FormGroup className="mb-1">
					<Col xs={{ size:10, offset:1}} lg={{ size: 6, offset: 3 }}>
						<Label for="text" className="mb-1"> Objet </Label>
						<Input
							type="text"
							name="text"
							id="text"
							placeholder="Quel est l'objet de votre message"
						/>
					</Col>
				</FormGroup>
				<FormGroup className="mb-1">
					<Col xs={{ size:10, offset:1}} lg={{ size: 6, offset: 3 }}>
						<Label for="message" className="mb-1"> Message </Label>
						<Input type="textarea" name="text" id="message" />
					</Col>
				</FormGroup>
				<Col xs={{ size:10, offset:1}} lg={{ size: 6, offset: 3 }}>
					<Button className="mt-2"> Envoyer </Button>
				</Col>
			</Form>
			</div>
		);
	}
}
