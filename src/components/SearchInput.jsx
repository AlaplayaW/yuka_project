import React from "react";

import {Input} from "reactstrap";

export default function SearchInput({ onChange, value }) {
	return (
		<Input
			value={value}
			onChange={event => onChange(event.target.value)}
			placeholder="chiffres du codebarre"
		/>
	);
}
