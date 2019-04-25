import React from "react";

export default function SearchInput({ onChange, value }) {
	return (
		<input
			value={value}
			onChange={event => onChange(event.target.value)}
			placeholder="Tapez le code barre du produit"
			className="d-none d-lg-block"
		/>
	);
}
