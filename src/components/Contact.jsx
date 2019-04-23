import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Contact extends React.Component {
	render() {
		return (
			<Form>
				<FormGroup>
					<Label for="name"> Votre nom </Label>
					<Input
						type="name"
						name="name"
						id="name"
						placeholder="Votre nom ici"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleEmail"> Email </Label>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="Votre email ici"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="text"> Objet </Label>
					<Input
						type="text"
						name="text"
						id="text"
						placeholder="Quel est l'objet de votre message"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="message"> Votre message </Label>
					<Input type="textarea" name="text" id="message" />
				</FormGroup>
				<Button> Envoyer </Button>
			</Form>
		);
	}
}
