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
      </div>
    </header>
  );
}
