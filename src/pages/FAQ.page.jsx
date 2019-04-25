import React from "react";
import Faq from "../components/FAQ";
import { Row, Col } from "reactstrap";

const FAQPage = () => {
	return (
		<div>
			<h1 style={{display: 'flex', justifyContent: 'center', marginTop: '0.6em', marginBottom: '1em'}}>Foire Aux Questions</h1>
			<Row>
				<Col>
					<Faq />
				</Col>
			</Row>
		</div>
	);
};

export default FAQPage;