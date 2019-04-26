import React from "react";
import styles from "../components/AboutUs.module.css";
import { Row, Col } from "reactstrap";
import AboutUs from "../components/AboutUs";

const AboutusPage = () => {
	return (
		<div className={styles.bgimg}>
			<AboutUs />
		</div>
	);
};

export default AboutusPage;
