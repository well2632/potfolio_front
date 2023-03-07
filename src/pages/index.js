import styles from "../styles/Home.module.css";
import { fetcher } from "../lib/api";
import Header from "../components/Header/Header";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";
import download from "downloadjs";
import Footer from "@/components/Footer/Footer";

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
                  123
                  <TypeAnimation
                    sequence={["teste", 2000, "abcde", 2000]}
                    speed={20}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    style={{ color: "#CB01C7" }}
                  />
                </h1>
                <p>descricao</p>
                <div className={styles.hero_buttons_container}>
                  <Link className={`${styles.button}`} id={styles.projects} href="#projetos">
                    Acessar projetos
                  </Link>
                  <a
                    className={`${styles.button} ${styles.download}`}
                    id={styles.download}
                    // onClick={() =>
                    //   download(`${cms}${homeInfo.data.attributes.curriculo.data.attributes.url}`)
                    // }
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
                <p>descricao sobre</p>
              </div>
            </div>
          </section>
          <section id="projetos" className={styles.projects}>
            <div className={styles.section_header}>
              <h3 className={styles.section_title}>Projetos em destaque</h3>
            </div>
            <div className={styles.list_projects}></div>
          </section>
          <section id="feedback" className={styles.testimonials}>
            <div className={styles.testimonials_container}>
              <h3 className={styles.section_title}>Avaliações </h3>
              <div className={styles.content}>
                <Slider className={styles.carousel_list} options={options}>
                  <div className={styles.testimonial}>
                    <div className={styles.testimonial_text}>
                      <h4 className={styles.testimonial_title}>titulo</h4>
                      <p className={styles.testimonial_description}>msg</p>
                    </div>

                    <div className={styles.testimonial_bottom_info}>
                      <div className={styles.testimonial_profile}>
                        {/* <img
                          src={`${cms}${element.attributes.imagem.data.attributes.url}`}
                          alt="Foto Bruno, cliente 99freelas"
                        /> */}
                        <div className={styles.testimonial_profile_text}>
                          <span className={styles.testimonial_profile_name}>autor</span>
                          <span className={styles.testimonial_profile_description}>99freelas</span>
                        </div>
                      </div>
                      <div className={styles.testimonial_rating}></div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
