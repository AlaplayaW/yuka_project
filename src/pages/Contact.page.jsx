import React from "react";
import Contact from "../components/Contact";
import { Row, Col } from "reactstrap";

const ContactPage = () => {
	return (
		<div>
			<h1>Contactez-nous</h1>
			<Row>
				<Col>
					<Contact />
				</Col>
			</Row>
		</div>
	);
};

export default ContactPage;
