import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
    <div 
    className={`container-fluid d-flex justify-content-between fixed-bottom mt-auto py-3`} 
    style={{backgroundColor: "rgb(247, 211, 6)"}} >
      <h3 className="p-2 mb-0">@ Chloé, Perrine, Jim, Doc</h3>
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
        <a href="https://www.twitter.com/" className={`${styles.twitter} ${styles.social}`}>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </div>
	);
}
