import React from "react";
import Faq from "../components/FAQ";
import { Row, Col } from "reactstrap";
import Layout from "../components/Layout"

const FAQPage = () => {
	return (
		<Layout>
		<div style={{backgroundColor: '#fede4f'}}>
 		<h1 style={{textAlign:"center", fontFamily: 'Sonsie One'}}>Foire Aux Questions</h1>
			<Row>
				<Col>
					<Faq />
				</Col>
			</Row>
		</div>
		</Layout>
	);
};

export default FAQPage;