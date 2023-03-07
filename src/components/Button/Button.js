import React from "react";
import styles from "./Button.module.css";

export default function Button({ type, onClick, text }) {
  const TYPES = ["primary", "secondary"];

  const buttonType = TYPES.includes(type) ? type : TYPES[0];

  const classes = ["button"];

  classes.push("primary");

  const className = classes.join(" ");

  return (
    <button onClick={onClick} className={`${styles.button} ${styles[buttonType]}`}>
      {text}
    </button>
  );
}
