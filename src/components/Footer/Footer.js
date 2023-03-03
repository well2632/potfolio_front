import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <p>Entre em contato</p>
      <p>
        <a href="mailto:hege@example.com">xdwelington@hotmail.com.br</a>
      </p>
      <hr />
      <p>ou via whatsapp</p>
      <p>
        <a>(11) 95493-0363</a>
      </p>
    </footer>
  );
}
