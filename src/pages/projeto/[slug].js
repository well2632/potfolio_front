import styles from "../../styles/Projeto.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import markdownToHtml from "@/lib/markdownToHtml";
import { fetcher } from "@/lib/api";

export default function Post({ project, cms, content }) {
  return (
    <div>
      <Header />
      {project.data && (
        <main className={styles.project_page}>
          <div className={styles.project_top_info}>
            <h2 className={styles.project_title}>{project.data.attributes.titulo}</h2>
            <span className={styles.project_description}>
              {project.data.attributes.texto_resumido}
            </span>
            {project.data.attributes.first_image && (
              <img
                className={styles.project_image}
                src={`${cms}${project.data.attributes.first_image.data.attributes.url}`}
              ></img>
            )}
          </div>
          {content && (
            <div
              className={styles.project_main_content}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          )}
        </main>
      )}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const project = await fetcher(`${process.env.CMS_URL}/api/projetos/${context.params.slug}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.API_TOKEN,
      "Content-Type": "application/json",
    },
  });

  const content = await markdownToHtml(project.data.attributes.content);

  return {
    props: { project, cms: process.env.CMS_URL, content },
  };
}
