import React from "react";
import Contact from "../components/Contact";
import { Row, Col } from "reactstrap";

const ContactPage = () => {
	return (
		<div>
			<Row>
				<Col>
					<Contact />
				</Col>
			</Row>
		</div>
	);
};

export default ContactPage;
