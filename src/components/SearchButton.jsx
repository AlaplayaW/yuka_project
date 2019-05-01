import React from "react";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./SearchButton.module.css";

export default function SearchButton({ barcode }) {
  return (
    <Button className={`${styles.button}`}>
      <Link to={`/product/${barcode}`}>Search</Link>
    </Button>
  )
}

