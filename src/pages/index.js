import styles from "../styles/Home.module.css";
import { fetcher } from "../lib/api";
import Header from "../components/Header/Header";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import download from "downloadjs";

const options = {
  showDots: false,
  swipeable: true,
  draggable: true,
  autoPlay: true,
  infinite: true,
  removeArrowOnDeviceType: ["tablet", "mobile", "desktop", "superLargeDesktop"],
};

export default function Home({ homeInfo, cms }) {
  return (
    <>
      <div>
        <Header />
        <div className={styles.page}>
          <div className={styles.hero_banner}>
            <div className={styles.hero_banner_top}>
              <div className={styles.hero_text_container}>
                <h1>
                  {homeInfo.data.attributes.hero_prefixo_titulo}
                  <TypeAnimation
                    sequence={homeInfo.data.attributes.hero_palavras_titulo.reduce((acc, item) => {
                      acc.push(item.palavra, 2000);
                      return acc;
                    }, [])}
                    speed={50}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    style={{ color: "#CB01C7" }}
                  />
                </h1>
                <p>{homeInfo.data.attributes.hero_descricao}</p>
                <div className={styles.hero_buttons_container}>
                  <Link className={`${styles.button}`} id={styles.projects} href="#projetos">
                    Acessar projetos
                  </Link>
                  <a
                    className={`${styles.button} ${styles.download}`}
                    id={styles.download}
                    onClick={() =>
                      download(`${cms}${homeInfo.data.attributes.curriculo.data.attributes.url}`)
                    }
                  >
                    Baixar currículo
                  </a>
                </div>
              </div>

              <div className={styles.video_container}>
                <video width="450px" height="450px" autoPlay muted loop>
                  <source src="/mock.webm" type="video/webm"></source>
                </video>
              </div>
            </div>
          </div>
          <section id="sobre" className={styles.about_me}>
            <div className={styles.about_me_container}>
              <h3 className={styles.section_title}>Sobre mim</h3>
              <div className={styles.content}>
                <p>{homeInfo.data.attributes.sobre}</p>
              </div>
            </div>
          </section>
          <section id="projetos" className={styles.projects}>
            <div className={styles.section_header}>
              <h3 className={styles.section_title}>Projetos em destaque</h3>
            </div>
            <div className={styles.list_projects}>
              {homeInfo.data.attributes.projetos.map((element) => (
                <div
                  className={
                    element.lado === "esquerda" ? styles.project_left : styles.project_right
                  }
                >
                  <img
                    className={styles.project_img}
                    src={`${cms}${element.projeto.data.attributes.thumb.data.attributes.url}`}
                  ></img>
                  <div className={styles.project_content}>
                    <div className={styles.project_content_text}>
                      <h4 className={styles.project_name}>
                        {element.projeto.data.attributes.titulo}
                      </h4>
                      <p className={styles.project_resume}>
                        {element.projeto.data.attributes.texto_resumido}
                      </p>
                    </div>
                    <div>
                      <Link
                        className={styles.project_content_button}
                        href={`/projeto/${element.projeto.data.attributes.slug}`}
                      >
                        Acessar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id="feedback" className={styles.testimonials}>
            <div className={styles.testimonials_container}>
              <h3 className={styles.section_title}>Avaliações </h3>
              <div className={styles.content}>
                <Slider className={styles.carousel_list} options={options}>
                  {homeInfo.data.attributes.avaliacaos.data.map((element) => (
                    <div className={styles.testimonial}>
                      <div className={styles.testimonial_text}>
                        <h4 className={styles.testimonial_title}>{element.attributes.titulo}</h4>
                        <p className={styles.testimonial_description}>
                          {element.attributes.mensagem}
                        </p>
                      </div>

                      <div className={styles.testimonial_bottom_info}>
                        <div className={styles.testimonial_profile}>
                          <img
                            src={`${cms}${element.attributes.imagem.data.attributes.url}`}
                            alt="Foto Bruno, cliente 99freelas"
                          />
                          <div className={styles.testimonial_profile_text}>
                            <span className={styles.testimonial_profile_name}>
                              {element.attributes.autor}
                            </span>
                            <span className={styles.testimonial_profile_description}>
                              {element.attributes.canal}
                            </span>
                          </div>
                        </div>
                        <div className={styles.testimonial_rating}></div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>
        </div>

        <footer id="contato" className={styles.footer}>
          <p>Entre em contato</p>
          <p>
            <a href="mailto:hege@example.com">xdwelington@hotmail.com.br</a>
          </p>
          <hr />
          <p>ou via whatsapp</p>
          <p>
            <a>(11) 95493-0363</a>
          </p>
        </footer>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const home = await fetcher(
    `${process.env.CMS_URL}/api/home?populate[0]=curriculo&populate[1]=avaliacaos.imagem&populate[2]=projetos.projeto.thumb&populate[3]=hero_palavras_titulo&populate[4]=logo`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.API_TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  return {
    props: {
      homeInfo: home,
      cms: process.env.CMS_URL,
    },
  };
}
