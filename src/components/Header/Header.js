import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ logo_src }) {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href="/" className={styles.logo}>
          Welington Martins
        </Link>
        <ul className={styles.header_menu}>
          <li>
            <Link href="/" className={styles.header_menu_item}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/sobre" className={styles.header_menu_item}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className={styles.header_menu_item}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
