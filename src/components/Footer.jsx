import React from "react";
import styles from "./Footer.module.css";
import { Badge } from "reactstrap";
import Barcode from "../images/bar-code.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

export default function Footer() {
	return (
		<div>
			{" "}
			{/* Footer desktop and mobile */}
			{/* FOOTER  */}
			<div className="d-none d-lg-block">
				<div
					className={`container-fluid d-flex justify-content-between mt-auto py-3`}
					style={{ backgroundColor: "#e6e7e8" }}
				>
					<h3 className="p-2 mb-0">@ Cloé, Perrine, Jim, Doc</h3>
					<div>
						<a
							href="https://www.youtube.com/watch?v=D9rFCgZa9zs"
							className={`${styles.youtube} ${styles.social}`}
						>
							<FontAwesomeIcon icon={faYoutube} size="2x" />
						</a>
						<a
							href="https://www.facebook.com/"
							className={`${styles.facebook} ${styles.social}`}
						>
							<FontAwesomeIcon icon={faFacebook} size="2x" />
						</a>
						<a
							href="https://www.twitter.com/"
							className={`${styles.twitter} ${styles.social}`}
						>
							<FontAwesomeIcon icon={faTwitter} size="2x" />
						</a>
					</div>
				</div>
			</div>
			{/* FOOTER MOBILE */}
			<div className={`${styles.Mobile} d-lg-none fixed-bottom`}>
				<div
					className={`container-fluid mt-auto`}
					style={{ backgroundColor: "rgb(247, 211, 6)", minHeight: "50px" }}
				>
					<div className="d-flex justify-content-between">
						<a href="/apropos/" className="py-3" style={{ color: "black" }}>
						<Link tag={Link} to="/apropos/" >
							A propos
						</Link>
						</a>
            <Badge tag={Link} to="/scan" color="" pill className={`p-1`}>
							<img className="" src={Barcode} style={{ width: "50px" }} alt="scan"/>
						</Badge>
						{/* <a href="/contact/" className="py-3" style={{ color: "black" }}>
							Contact
						</a> */}
						<a href="/contact/" className="py-3" style={{ color: "black" }}>
						<Link tag={Link} to="/contact/" >
							Contact
						</Link>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
