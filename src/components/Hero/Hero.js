import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Hero.module.css";
import download from "downloadjs";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Construindo o futuro através da usabilidade</h1>
      <p>Ajudo empresas a construirem experiências melhores para os seus usuários</p>
      <div className={styles.hero_buttons}>
        <Button
          text="Contato"
          onClick={() => {
            window.open(
              "https://wa.me/5511954930363?text=Ol%C3%A1+Welington%2C+peguei+seu+contato+atrav%C3%A9s+do+seu+portf%C3%B3lio.",
              "_blank"
            );
          }}
          data-aos="fade-up-right"
        />
        <Button
          text="Currículo"
          type="secondary"
          onClick={() => {
            download("/files/curriculo.pdf");
          }}
          data-aos="fade-up-left"
        />
      </div>
    </div>
  );
}
