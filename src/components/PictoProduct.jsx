import React from "react";
import NoteA from "../images/noteA.png";
import NoteB from "../images/noteB.png";
import NoteC from "../images/noteC.png";
import NoteD from "../images/noteD.png";
import NoteE from "../images/noteE.png";

export default function nutriScorePicture(props) {
	const nutriscore = this.props.nutriscore;
	if (nutriscore === "-1") {
		return (
			<img
				block
				className="mx-auto my-5 "
				src="../images/noteA.png"
				alt=""
				style={{ borderRadius: "100%" }}
			/>
		);
	} else if (nutriscore === "-2") {
		return NoteB;
	} else if (nutriscore === "-3") {
		return NoteC;
	} else if (nutriscore === "-4") {
		return NoteD;
	} else if (nutriscore === "-5") {
		return NoteE;
	}
}
