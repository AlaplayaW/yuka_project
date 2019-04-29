import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

import styles from "./Contact.module.css";

export default class Contact extends React.Component {
	render() {
		return (
			<Form className={`${styles.Form} p-lg-4 d-flex flex-column justify-content-center`}>
				<Col xs={{ size:10, offset:1}} md={{ size: 6, offset: 3 }} className={`${styles.h1} mt-3`}>Contactez-nous</Col>
				<FormGroup>
					<Col xs={{ size:10, offset:1}} md={{ size: 6, offset: 3 }}>
						<Label for="name"> Nom </Label>
						<Input
							type="name"
							name="name"
							id="name"
							placeholder="Votre nom ici"
						/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col xs={{ size:10, offset:1}} md={{ size: 6, offset: 3 }}>
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
					<Col xs={{ size:10, offset:1}} md={{ size: 6, offset: 3 }}>
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
					<Col xs={{ size:10, offset:1}} md={{ size: 6, offset: 3 }}>
						<Label for="message"> Message </Label>
						<Input type="textarea" name="text" id="message" />
					</Col>
				</FormGroup>
				<Col xs={{ size:10, offset:1}} md={{ size: 6, offset: 3 }}>
					<Button className="m-3"> Envoyer </Button>
				</Col>
			</Form>
		);
	}
}
