import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  const { type, text } = props;

  const TYPES = ["primary", "secondary"];
  const buttonType = TYPES.includes(type) ? type : TYPES[0];

  const classes = ["button"];

  classes.push("primary");

  const className = classes.join(" ");

  return (
    <button className={`${styles.button} ${styles[buttonType]}`} {...props}>
      {text}
    </button>
  );
}
