import React from "react";
import Faq from "../components/FAQ";
import { Row, Col } from "reactstrap";
import Layout from "../components/Layout"
import styles from "./FAQ.module.css";

const FAQPage = () => {
	return (
		<Layout>
		<div style={{backgroundColor: '#fede4f'}} className={styles.container}>
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