import React from "react";

import { Input } from "reactstrap";

export default function SearchInput({ onChange, value }) {
	return (
		<Input
			value={value}
			onChange={event => onChange(event.target.value)}
			placeholder="Chiffres du codebarre"
			onKeyPress={event => {
				if (event.key === "Enter") {
					event.preventDefault();
					document.getElementById("search").click();
				}
			}}
		/>
	);
}
