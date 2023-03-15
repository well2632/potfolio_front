import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import DataPosts from "@/data/posts.json";
import Button from "@/components/Button/Button";
import download from "downloadjs";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <Hero />
        <section className={styles.projects}>
          <div className={styles.project}>
            <div className={styles.project_content} data-aos="fade-up">
              <div className={styles.project_content_title}>
                <h2>Projeto Mixagro</h2>
                <h4>
                  Discovery e prototipação de um software para gestão de pulverização agrícola.
                </h4>
              </div>
              <div className={styles.project_content_tasks}>
                <span>Tarefas realizadas:</span>
                <ul className={styles.tasks_tags}>
                  <li>UX Design</li>
                  <li>UI Design</li>
                </ul>
              </div>
              <div className={styles.project_content_buttons}>
                <Button
                  text="Visualizar"
                  onClick={() => window.open("/files/mixagro.pdf", "_blank")}
                />
              </div>
            </div>
            <div className={styles.project_images}>
              <img src="/images/mockup_mixagro.png" data-aos="fade-left" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: DataPosts,
  };
}
