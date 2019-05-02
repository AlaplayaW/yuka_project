import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./SearchButton.module.css";
import { isString } from "util";

export default function SearchButton({ barcode }) {
	return (
		<Button
			id="search"
			className={`${styles.button}`}
			tag={Link}
			to={`/product/${barcode}`}
			disabled={!barcode}
		>
			Search
		</Button>
	);
}
