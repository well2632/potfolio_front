import styles from "./Post.module.css";

export default function Post() {
  return (
    <div className={styles.work_container}>
      <div className={styles.image_work_container}>
        <img src="/images/meia-duzia.png" alt="projeto meia dúzia" />
      </div>
      <div className={styles.text_work_container}>
        <h4>Projeto meia duzia</h4>
        <p>Descricao</p>
      </div>
    </div>
  );
}
