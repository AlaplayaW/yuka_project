import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchButton.module.css";

export default function SearchButton({ barcode }) {
  return (
    <button className={`${styles.button}`}>
      <Link to={`/product/${barcode}`}>Search</Link>
    </button>
  )
}

