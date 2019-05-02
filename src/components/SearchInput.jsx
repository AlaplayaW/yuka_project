import React from "react";

import { Input } from "reactstrap";

import styles from "./SearchInput.module.css";

export default function SearchInput({ onChange, value }) {
	return (
		<Input
			type="number"
			className={styles.placeholder}
			value={value}
			onChange={event => onChange(event.target.value)}
			placeholder="Entre le code barre du produit"
			onKeyPress={event => {
				if (event.key === "Enter") {
					event.preventDefault();
					document.getElementById("search").click();
				}
			}}
		/>
	);
}
