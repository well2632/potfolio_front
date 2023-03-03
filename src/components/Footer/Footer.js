import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.footer_menu_container}>
        <span className={styles.footer_menu_title}>Contatos</span>
        <ul>
          <li>
            <a href="mailto:hege@example.com">xdwelington@hotmail.com.br</a>
          </li>
          <li>
            <a href="">(11) 95493-0363</a>
          </li>
        </ul>
      </div>
      <div className={styles.footer_menu_container}>
        <span className={styles.footer_menu_title}>Redes sociais</span>
        <ul>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/welington-martins/">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
