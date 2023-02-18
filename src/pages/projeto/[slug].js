import styles from "../../styles/Projeto.module.css";
import Header from "@/components/Header/Header";

export default function Post() {
  return (
    <div>
      <Header />
      <div className={styles.content}>Página post</div>
    </div>
  );
}
