import React from "react";

export default function SearchInput({ onChange, value }) {
	return (
		<input
			value={value}
			onChange={event => onChange(event.target.value)}
			placeholder="code barre du produit"
		/>
	);
}
