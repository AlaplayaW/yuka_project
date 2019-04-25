import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import styles from "./Member.module.css";

// const MemberTeam = props => {
// 	return (
// 		<div>
// 			<Card body outline color="warning">
// 				<img src="https://i.postimg.cc/cJHrKgcD/cloe.png" alt="lalala" />
// 				<h3 className="text-center"> Prénom </h3>
// 				<p className={styles.Presentation}>
// 					Ici le texte de présentation qui ne doit apparaître qu'au hover de la
// 					putain de card
// 				</p>
// 			</Card>
// 		</div>
// 		// 	<div>
// 		// 	<Card classname={styles.cardmember} body outline color="warning">
// 		// 	 		<img src={props.image} />
// 		// 			<CardTitle>{props.name} </CardTitle>
// 		// 		</Card>
// 		// 	 	<Card body outline color="warning">
// 		// 			<CardText> {props.presentation} </CardText>
// 		// 		</Card>
// 		//  </div>
// 	);
// };

// export default MemberTeam;

// TEST HOVER STYLE
const MemberTeam = props => {
	return (
		<>
			<Card className={styles.hovereffect} body outline color="warning">
				<img src="https://i.postimg.cc/cJHrKgcD/cloe.png" alt="lalala" />
				<p>
					Ici le texte de présentation qui ne doit apparaître qu'au hover de la
					putain de card
				</p>
				{/* <div> */}
				<CardTitle className={styles.CardTitle}> Prénom </CardTitle>
				{/* </div> */}
				{/* <div>
					<h3 className="text-center"> Prénom </h3>
				</div> */}
			</Card>
		</>
	);
};

export default MemberTeam;
