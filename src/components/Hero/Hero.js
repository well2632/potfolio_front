import React from "react";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Construindo o futuro através da usabilidade</h1>
      <h4>Ajudo empresas a construirem experiências melhores para os seus usuários</h4>
      <video
        src={"/videos/interacion-design.mp4"}
        style={{ width: "400px", height: "400px" }}
        autoPlay="autoplay"
        muted="true"
        loop
      />
      <div className={styles.hero_buttons}>
        <Button
          text="Projetos"
          onClick={() => {
            console.log("teste");
          }}
        />
      </div>
    </div>
  );
}
