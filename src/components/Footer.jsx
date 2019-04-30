import React from "react";
import styles from "./Footer.module.css";
import { Badge } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter
} from "@fortawesome/free-brands-svg-icons";

import Barcode from "../images/bar-code.png";

export default function Footer() {
	return (
		<div className={`bg-white`}>
			{/* FOOTER DESKTOP */}
			<div className={`d-none d-lg-block border-top`}>
				<div className={`d-flex justify-content-between px-3`}>
					<h3 className="p-2">@ Cloé, Perrine, Jim, Doc</h3>
					<div className="d-flex align-items-center">
						<a
							href="https://www.youtube.com/watch?v=D9rFCgZa9zs"
							target="_blank"
							rel="noopener noreferrer"
							className={`${styles.youtube} ${styles.HvrGrow}`}
						>
							<FontAwesomeIcon icon={faYoutube} size="2x" />
						</a>
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
							className={`${styles.facebook} ${styles.HvrGrow}`}
						>
							<FontAwesomeIcon icon={faFacebook} size="2x" />
						</a>
						<a
							href="https://www.twitter.com/"
							target="_blank"
							rel="noopener noreferrer"
							className={`${styles.twitter} ${styles.HvrGrow}`}
						>
							<FontAwesomeIcon icon={faTwitter} size="2x" />
						</a>
					</div>
				</div>
			</div>
			{/* FOOTER MOBILE */}
			<div
				className={`${
					styles.Mobile
				} d-lg-none fixed-bottom bg-white border-top`}
			>
				<div className="d-flex justify-content-around">
					{/* <NavLink
						tag={Link}
						to="/apropos"
						className="py-3"
						style={{ color: "black" }}
					>
						A propos
					</NavLink> */}

					<Badge tag={Link} to="/scan" color="#495057" pill className={`p-1`}>
						<img
							className=""
							src={Barcode}
							style={{ width: "50px" }}
							alt="scan"
						/>
					</Badge>
					{/* <NavLink
						tag={Link}
						to="/contact"
						className="py-3"
						style={{ color: "black" }}
					>
						Contact
					</NavLink> */}
				</div>
			</div>
		</div>
	);
}
