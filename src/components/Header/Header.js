import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ logo_src }) {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.svg" />
        </Link>
        {/* <nav className={styles.menu}>
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}
